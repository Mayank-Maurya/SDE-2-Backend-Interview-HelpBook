
abstract class Cache<K, V> {
    protected size: number;
    constructor(size: number) {
        this.size = size;
    }

    abstract get(key: K): V | null;
    abstract put(key: K, value: V): void;
}

class Node<K, V> {
    prev: Node<K, V> | undefined;
    key: K;
    value: V;
    next: Node<K, V> | undefined;

    constructor(key: K, value: V, prev: Node<K, V>, next: Node<K, V>);
    constructor(key: K, value: V);

    constructor(key: K, value: V, prev?: Node<K, V>, next?: Node<K, V>) {
        this.key = key;
        this.value = value;
        if (prev)
            this.prev = prev;
        if (next)
            this.next = next;
    }
}

class LRUCache<K, V> extends Cache<K, V> {

    private dllHead: Node<K, V> | undefined;
    private dllTail: Node<K, V> | undefined;
    private map: Map<K, Node<K, V>> ;
    constructor(size: number) {
        super(size);
        this.map = new Map();
    }

    get(key: K): V | null {
        if (!this.map.has(key)) {
            return null;
        }
        let node: Node<K, V> | undefined = this.map.get(key);
        if (!node) {
            throw Error(`Coudn't fetch key ${key}`);
        }

        // settle tail position
        if (this.dllTail) {
            if (node === this.dllTail) {
                this.dllTail = node.prev;
            }
        }

        if (!node.prev) {
            if (node.next) {
                node.next.prev = undefined;
            }
        } else {
            if (node.next) {
                node.prev.next = node.next;
                node.next.prev = node.prev;
            } else {
                node.prev.next = undefined;
            }
        }
        // assign node to head and push head to second
        if (this.dllHead) {
            node.next = this.dllHead;
            this.dllHead.prev = node;
            this.dllHead = node;
        }

        return node ? node.value : null;
    }

    put(key: K, value: V): void {
        let node: Node<K, V> | undefined;
        if (this.map.has(key)) {
            // update the map and dll
            node = this.map.get(key);
            if (!node) {
                throw Error(`Coudn't fetch key ${key}`);
            }
            // settle tail position
            if (this.dllTail) {
                if (node === this.dllTail) {
                    this.dllTail = node.prev;
                }
            }

            // remove it node from dll position merge prev and next pointers
            if (!node.prev) {
                if (node.next) {
                    node.next.prev = undefined;
                }
            } else {
                if (node.next) {
                    node.prev.next = node.next;
                    node.next.prev = node.prev;
                } else {
                    node.prev.next = undefined;
                }
            }
        } else {
            // create new Node from scratch
            node = new Node(key, value);
            // this.map.set(key, node);
        }

        // assign node to head and push head to second
        if (this.dllHead) {
            node.next = this.dllHead;
            this.dllHead.prev = node;
            this.dllHead = node;
            node.prev = undefined;
        } else {
            this.dllHead = node;
            this.dllTail = this.dllHead;
        }

        if (this.map.size == this.size) {
            this.removeLRUFromMap();
        }
        this.map.set(key, node);
    }

    removeLRUFromMap() {
        if (this.dllTail) {
            this.map.delete(this.dllTail.key);
            if (this.dllTail.prev) {
                this.dllTail = this.dllTail.prev;
                this.dllTail.next = undefined;
            } else {
                // single node case: cache becomes empty
                this.dllHead = undefined;
                this.dllTail = undefined;
            }
        }
    }
}

const cache = new LRUCache<string, number>(3); // capacity = 3

cache.put("a", 1);
cache.put("b", 2);
cache.put("c", 3);
console.log(cache.get("a"));     // returns 1  ("a" is now most recently used)
cache.put("d", 4); // evicts "b" (least recently used)
console.log(cache.get("b"));     // returns null (evicted)