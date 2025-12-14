abstract class Db {
    abstract set(key: string, value: string): void; 
    abstract get(key: string): string | undefined; 
    abstract delete(key: string): void; 
    abstract begins(): void;
    abstract rollback(): void; 
    abstract commit(): void; 
}

export { Db };