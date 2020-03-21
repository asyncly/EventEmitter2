export type eventNS = string[];
export interface ConstructorOptions {
    /**
     * @default false
     * @description set this to `true` to use wildcards.
     */
    wildcard?: boolean,
    /**
     * @default '.'
     * @description the delimiter used to segment namespaces.
     */
    delimiter?: string,
    /**
     * @default false
     * @description set this to `true` if you want to emit the newListener events.
     */
    newListener?: boolean,
    /**
     * @default false
     * @description set this to `true` if you want to emit the removeListener events.
     */
    removeListener?: boolean,
    /**
     * @default 10
     * @description the maximum amount of listeners that can be assigned to an event.
     */
    maxListeners?: number
    /**
     * @default false
     * @description show event name in memory leak message when more than maximum amount of listeners is assigned, default false
     */
    verboseMemoryLeak?: boolean
    /**
     * @default false
     * @description disable throwing uncaughtException if an error event is emitted and it has no listeners
     */
    ignoreErrors?: boolean
}
export interface Listener {
    (...values: any[]): void;
}
export interface EventAndListener {
    (event: string | string[], ...values: any[]): void;
}

export interface WaitForOptions {
    /**
     * @default 0
     */
    timeout: number,
    /**
     * @default null
     */
    filter: { (...values: any[]): boolean },
    /**
     * @default false
     */
    handleError: boolean
}

export interface WaitForThenable<T> extends Promise<T>{
    cancel(reason: string): undefined
}

export declare class EventEmitter2 {
    constructor(options?: ConstructorOptions)
    emit(event: string | string[], ...values: any[]): boolean;
    emitAsync(event: string | string[], ...values: any[]): Promise<any[]>;
    addListener(event: string, listener: Listener): this;
    on(event: string | string[], listener: Listener): this;
    prependListener(event: string | string[], listener: Listener): this;
    once(event: string | string[], listener: Listener): this;
    prependOnceListener(event: string | string[], listener: Listener): this;
    many(event: string | string[], timesToListen: number, listener: Listener): this;
    prependMany(event: string | string[], timesToListen: number, listener: Listener): this;
    onAny(listener: EventAndListener): this;
    prependAny(listener: EventAndListener): this;
    offAny(listener: Listener): this;
    removeListener(event: string | string[], listener: Listener): this;
    off(event: string, listener: Listener): this;
    removeAllListeners(event?: string | eventNS): this;
    setMaxListeners(n: number): void;
    getMaxListeners(): number;
    eventNames(): string[];
    listeners(event: string | string[]): Listener[] // TODO: not in documentation by Willian
    listenersAny(): Listener[] // TODO: not in documentation by Willian
    waitFor(event: string, options?: WaitForOptions): WaitForThenable<any>
    static defaultMaxListeners: number;
}
