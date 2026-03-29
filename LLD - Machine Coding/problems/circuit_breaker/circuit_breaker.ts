
class CircuitOpenError extends Error {
    constructor() {
        super('Circuit is Open');
        this.name = 'CircuitOpenError';
    }
}

class CircuitHalfOpenError extends Error {
    constructor() {
        super('Circuit is Half Open');
        this.name = 'CircuitHalfOpenError';
    }
}
enum STATE {
    CLOSED,
    OPEN,
    HALF_OPEN
}
type Config = {
    failureThreshold: number;
    coolDownInMS: number;
}
class CircuitBreaker {
    // state
    private state: STATE;
    private failureCount: number = 0;
    private config: Config;
    private isProbeCall: boolean = false;

    constructor(config: Config) {
        this.state = STATE.CLOSED;
        this.config = config;
    }
    public getState(): STATE {
        return this.state;
    }

    public async call<T>(callback: () => Promise<T>): Promise<T> {
        let response: T;
        switch (this.state)
        {
            case STATE.CLOSED:
                try {
                    response = await callback();
                    this.failureCount = 0;
                } catch (e) {
                    this.failureCount++;
                    if (this.failureCount >= this.config.failureThreshold) {
                        this.trip();
                    }
                    throw e;
                }
                break;
            case STATE.OPEN:
                    throw new CircuitOpenError();
            case STATE.HALF_OPEN:
                if (this.isProbeCall)
                    throw new CircuitHalfOpenError();
                try {
                    this.isProbeCall = true;
                    response = await callback();
                    this.reset();
                } catch (e) {
                    this.trip();
                    throw e;
                }
                break; 
        }

        return Promise.resolve(response);
    }

    private trip() {
        this.failureCount = 0;
        this.state = STATE.OPEN;
        setTimeout(() => this.halfOpen(), this.config.coolDownInMS);
        this.isProbeCall = false;
    }

    private halfOpen() {
        this.state = STATE.HALF_OPEN;
        this.isProbeCall = false;
    }

    private reset() {
        this.state = STATE.CLOSED;
        this.failureCount = 0;
        this.isProbeCall = false;
    }

}

async function main() {
    const breaker = new CircuitBreaker({
    failureThreshold: 3,
    coolDownInMS: 5000,
    });
    const payload = {};

    const result = await breaker.call(() => fetchFromPaymentGateway(payload));

    const fetchFromPaymentGateway = async (payload: any): Promise<void> => {
        return Promise.resolve();
    };
}

main();
