import express, { NextFunction, Request, Response } from 'express';
import { rateLimiter } from '../rate_limiter/RateLimiter';
import { RateLimiterHeader } from '../interfaces/rate_limiter';

const router = express.Router();

router.get('/', async (request: Request, response: Response, next: NextFunction) => {
    const userIp = request.ip || '127.0.0.1';

    let resultHeader;
    resultHeader = rateLimiter.ProcessUserRequest(userIp);

    response.header(resultHeader.headers);
    let result;
    if (!resultHeader.allowed) {
        result = {
            status: "error", 
            message: "Too many requests"
        };
        response.status(429);
    } else {
        result = {
            status: "success", 
            message: "Request processed"
        };
        response.status(200);
    }

    return response.send(result);
});

export default router;