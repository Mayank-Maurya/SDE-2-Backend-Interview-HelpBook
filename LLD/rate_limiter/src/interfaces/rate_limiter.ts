export interface RateLimiterHeader { 'X-RateLimit-Limit': number, 'X-RateLimit-Remaining': number, 'X-RateLimit-Reset': number }

export interface RateLimiterResponse {
    allowed: boolean;        // The clear decision for the server
    headers: RateLimiterHeader; // The data for the client
}