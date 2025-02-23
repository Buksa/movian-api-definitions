declare module "movian/settings" {
    /** Unique identifier for the settings */
    export var id: string;
    
    /** Nodes containing the settings */
    export var nodes: PropValue;
    
    /** Properties of the settings */
    export var properties: PropValue;

    /**
     * Destroys the settings instance
     */
    export function destroy(): void;
    
    /**
     * Dumps debug information about the settings
     */
    export function dump(): void;

    /**
     * Creates a boolean setting
     * @param id - Unique identifier for the setting
     * @param title - Title of the setting
     * @param def - Default value
     * @param callback - Callback when value changes
     * @param persistent - Whether the setting should persist
     */
    export function createBool(id: string, title: string, def: boolean, callback: (value: boolean) => void, persistent: boolean): Setting;
    
    /**
     * Creates a string setting
     * @param id - Unique identifier for the setting
     * @param title - Title of the setting
     * @param def - Default value
     * @param callback - Callback when value changes
     * @param persistent - Whether the setting should persist
     */
    export function createString(id: string, title: string, def: string, callback: (value: string) => void, persistent: boolean): Setting;
    
    /**
     * Creates an integer setting
     * @param id - Unique identifier for the setting
     * @param title - Title of the setting
     * @param def - Default value
     * @param min - Minimum value
     * @param max - Maximum value
     * @param step - Step value
     * @param unit - Unit of measurement
     * @param callback - Callback when value changes
     * @param persistent - Whether the setting should persist
     */
    export function createInt(id: string, title: string, def: number, min: number, max: number, step: number, unit: string,
        callback: (value: number) => void, persistent: boolean): Setting;
    
    /**
     * Creates a divider in the settings UI
     * @param title - Title of the divider
     */
    export function createDivider(title: string): void;
    
    /**
     * Creates an informational setting
     * @param id - Unique identifier for the setting
     * @param icon - Icon for the setting
     * @param description - Description text
     */
    export function createInfo(id: string, icon: string, description: string): void;
    
    /**
     * Creates an action setting
     * @param id - Unique identifier for the setting
     * @param title - Title of the setting
     * @param callback - Callback when action is triggered
     */
    export function createAction(id: string, title: string, callback: () => void): Setting;
    
    /**
     * Creates a multi-option setting
     * @param id - Unique identifier for the setting
     * @param title - Title of the setting
     * @param options - Available options
     * @param callback - Callback when value changes
     * @param persistent - Whether the setting should persist
     */
    export function createMultiOpt(id: string, title: string, options: MultiOptOption[], callback: (value: string) => void, persistent: boolean): Setting;

    /**
     * Creates global settings
     * @param id - Unique identifier for the settings
     * @param title - Title of the settings
     * @param icon - Icon for the settings
     * @param description - Description of the settings
     */
    export function globalSettings(id: string, title: string, icon: string, description: string): void;
    
    /**
     * Creates key-value store settings
     * @param nodes - Nodes containing the settings
     * @param url - URL for the settings
     * @param domain - Domain for the settings
     */
    export function kvstoreSettings(nodes: PropValue, url: string, domain: string): void;
}

/**
 * Represents an option in a multi-option setting
 */
interface MultiOptOption {
    /** Option value */
    [0]: string;
    
    /** Option label */
    [1]: string;
    
    /** Whether the option is selected */
    [2]?: boolean;
}

/**
 * Represents a setting
 */
interface Setting {
    /** Model containing the setting's value */
    model: PropValue;
    
    /** Current value of the setting */
    value: any;
    
    /** Whether the setting is enabled */
    enabled: boolean;
}

/**
 * Represents a global settings instance
 */
interface SettingsGlobalInstance {
    /**
     * Destroys the settings instance
     */
    destroy(): void;
    
    /**
     * Dumps debug information about the settings
     */
    dump(): void;

    /**
     * Creates a boolean setting
     * @param id - Unique identifier for the setting
     * @param title - Title of the setting
     * @param def - Default value
     * @param callback - Callback when value changes
     * @param persistent - Whether the setting should persist
     */
    createBool(id: string, title: string, def: boolean, callback: (value: boolean) => void, persistent: boolean): Setting;
    
    /**
     * Creates a string setting
     * @param id - Unique identifier for the setting
     * @param title - Title of the setting
     * @param def - Default value
     * @param callback - Callback when value changes
     * @param persistent - Whether the setting should persist
     */
    createString(id: string, title: string, def: string, callback: (value: string) => void, persistent: boolean): Setting;
    
    /**
     * Creates an integer setting
     * @param id - Unique identifier for the setting
     * @param title - Title of the setting
     * @param def - Default value
     * @param min - Minimum value
     * @param max - Maximum value
     * @param step - Step value
     * @param unit - Unit of measurement
     * @param callback - Callback when value changes
     * @param persistent - Whether the setting should persist
     */
    createInt(id: string, title: string, def: number, min: number, max: number, step: number, unit: string,
        callback: (value: number) => void, persistent: boolean): Setting;
    
    /**
     * Creates a divider in the settings UI
     * @param title - Title of the divider
     */
    createDivider(title: string): void;
    
    /**
     * Creates an informational setting
     * @param id - Unique identifier for the setting
     * @param icon - Icon for the setting
     * @param description - Description text
     */
    createInfo(id: string, icon: string, description: string): void;
    
    /**
     * Creates an action setting
     * @param id - Unique identifier for the setting
     * @param title - Title of the setting
     * @param callback - Callback when action is triggered
     */
    createAction(id: string, title: string, callback: () => void): Setting;
    
    /**
     * Creates a multi-option setting
     * @param id - Unique identifier for the setting
     * @param title - Title of the setting
     * @param options - Available options
     * @param callback - Callback when value changes
     * @param persistent - Whether the setting should persist
     */
    createMultiOpt(id: string, title: string, options: MultiOptOption[], callback: (value: string) => void, persistent: boolean): Setting;
}
