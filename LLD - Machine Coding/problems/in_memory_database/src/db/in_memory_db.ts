import { Db } from "./db";
const TOMBSTONE = Symbol("DELETED");
class InMemoryDB extends Db {
    private declare db: Map<string, any>;
    private declare transactionDb: Map<string, any>;
    private declare isTransactionBegins: boolean;

    constructor() {
        super();
        this.db = new Map();
        this.transactionDb = new Map();
        this.isTransactionBegins = false;
    }

    set(key: string, value: string): void {
        if (this.isTransactionBegins) {
            this.transactionDb.set(key, value);
        } else {
            this.db.set(key, value);
        }
    }
    get(key: string): any {
        if (this.isTransactionBegins) {
            if (this.transactionDb.has(key)) {
                const val = this.transactionDb.get(key) || '';
                if (val === TOMBSTONE) return null;
                return val;
            }
        }
        
        return this.db.get(key);
    }
    delete(key: string): void {
        if (this.isTransactionBegins) {
            this.transactionDb.set(key, TOMBSTONE);
        } else {
            this.db.delete(key);
        }
    }
    begins(): void {
        if (this.isTransactionBegins) {
            throw new Error("Nested Transactions are not allowed");
        }
        // clean Transactional DB
        this.transactionDb.clear();
        this.isTransactionBegins = true;
    }
    rollback(): void {
        if (!this.isTransactionBegins) {
            throw new Error("rollback outside Transactions are not allowed");
        }
        this.isTransactionBegins = false;
    }
    commit(): void {
        if (!this.isTransactionBegins) {
            throw new Error("commit outside Transactions are not allowed");
        }
        this.transactionDb.forEach((value, key) => {
            // check key type
            if (value === TOMBSTONE) {
                this.db.delete(key);
            } else {
                this.db.set(key, value);
            }
        });
        this.isTransactionBegins = false;
    }
}

const db = new InMemoryDB();

export { db };