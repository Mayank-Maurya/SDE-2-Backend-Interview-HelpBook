import { RateLimiterHeader } from "../interfaces/rate_limiter";

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
        setInterval(this.processRefill, this.refillRate * 1000);
    }

    processRefill = () => {
        console.log(`ran on ${new Date().toISOString()}`)
        for (let [userIp, bucket] of this.UserBucketMap.entries()) {
            if (bucket.initTime + this.refillRate <= Date.now()) {
                if (bucket.tokens < this.bucketSize) {
                    bucket.tokens = bucket.tokens + 1;
                    this.UserBucketMap.set(userIp, bucket);
                }
            }
        }
    }

    ProcessUserRequest(userIp: string): RateLimiterHeader {
        // check if the user already exists
        let userBucket: Bucket | undefined = this.UserBucketMap.get(userIp);
        if (!userBucket) {
            // assign the user a new bucket
            userBucket = new Bucket(this.bucketSize, Date.now());
        }

        // check if the bucket is empty
        if (userBucket.tokens !== 0) {
            userBucket.tokens = userBucket.tokens - 1;
            this.UserBucketMap.set(userIp, userBucket);
        } else {
            this.UserBucketMap.set(userIp, userBucket);
            return {
                "X-RateLimit-Limit": this.bucketSize,
                "X-RateLimit-Remaining": -1,
                "X-RateLimit-Reset": (Date.now() - userBucket.initTime + this.refillRate)
            };
        }

        return {
            "X-RateLimit-Limit": this.bucketSize,
            "X-RateLimit-Remaining": userBucket.tokens,
            "X-RateLimit-Reset": (Date.now() - userBucket.initTime + this.refillRate)
        };
    }
    
}

const rateLimiter = new RateLimiter(5,10);

export { rateLimiter };