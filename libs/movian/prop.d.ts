declare module "movian/prop" {
    /** Global property value */
    export var global: PropValue;

    /**
     * Creates a new root property value
     * @param name - Name of the root property
     * @returns The created PropValue instance
     */
    export function createRoot(name: string): PropValue;
    
    /**
     * Prints property data for debugging
     * @param data - The property data to print
     */
    export function print(data: any): void;
    
    /**
     * Subscribes to property value changes
     * @param prop - The property to subscribe to
     * @param callback - Callback function when value changes
     * @param ctrl - Control object for the subscription
     */
    export function subscribeValue(prop: PropValue, callback: (data: any[]) => void, ctrl: any): void;
}

/**
 * Represents a property value in Movian
 */
declare interface PropValue {
    /** Property values indexed by key */
    [key: string]: PropValue;
}
