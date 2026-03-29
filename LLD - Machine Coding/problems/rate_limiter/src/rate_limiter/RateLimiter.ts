import { timeEnd } from "console";
import { RateLimiterHeader, RateLimiterResponse } from "../interfaces/rate_limiter";

class Bucket {
    declare tokens: number;
    declare initTime: number; // in seconds
    constructor(tokens: number, initTime: number) {
        this.initTime = initTime;
        this.tokens = tokens;
    }
}
class RateLimiter {
    declare UserBucketMap: Map<string, Bucket>;
    declare bucketSize: number;
    declare refillRate: number; // in seconds

    constructor(bucketSize: number, refillRate: number) {
        this.UserBucketMap = new Map();
        this.bucketSize = bucketSize;
        this.refillRate = refillRate;
    }

    ProcessUserRequest(userIp: string): RateLimiterResponse {
        // check if the user already exists
        const curTime = Date.now() / 1000;
        let userBucket: Bucket | undefined = this.UserBucketMap.get(userIp);
        if (!userBucket) {
            // assign the user a new bucket
            userBucket = new Bucket(this.bucketSize, curTime);
            this.UserBucketMap.set(userIp, userBucket);
        }

        const timePassed = curTime - userBucket.initTime;
        const tokensToAdd = timePassed / this.refillRate;

        userBucket.tokens = Math.min(this.bucketSize, userBucket.tokens + tokensToAdd);
        userBucket.initTime = curTime;
        
        let allowed = false;
        if (userBucket.tokens >= 1) {
            userBucket.tokens -= 1;
            allowed = true;
        }

        const timeToNextToken = this.refillRate - ((userBucket.tokens % 1) * this.refillRate);

        return {
            allowed: allowed,
            headers: {
                "X-RateLimit-Limit": this.bucketSize,
                "X-RateLimit-Remaining": Math.floor(userBucket.tokens),
                "X-RateLimit-Reset": allowed ? 0 : timeToNextToken,
            }
        };
    }

    isRefillingTime(last_refill_timestamp: number, curTime: number): boolean {
        return (last_refill_timestamp + this.refillRate) > curTime;
    }
    
}

const rateLimiter = new RateLimiter(5,10);

export { rateLimiter };