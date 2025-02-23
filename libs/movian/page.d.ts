/// <reference path="./prop.d.ts" />
/// <reference path="./settings.d.ts" />

declare module "movian/page" {
    /**
     * Represents a route for page navigation
     */
    export class Route {
        /**
         * Creates a new route
         * @param regex - Regular expression pattern for matching the route
         * @param callback - Callback function to handle the route
         */
        constructor(regex: string, callback: (page: Page, ...args: string[]) => void);
        
        /**
         * Destroys the route
         */
        destroy(): void;
    }

    /**
     * Handles search functionality
     */
    export class Searcher {
        /**
         * Creates a new searcher
         * @param title - Title of the search
         * @param icon - Icon for the search
         * @param callback - Callback function to handle search results
         */
        constructor(title: string, icon: string, callback: (page: Page, ...args: string[]) => void);
        
        /**
         * Destroys the searcher
         */
        destroy(): void;
    }
}

/**
 * Metadata for an item
 */
interface ItemMetadata {
    /** Title of the item */
    title: string;
    
    /** Description of the item */
    description?: string;
    
    /** Icon/thumbnail URL for the item */
    icon?: string;
    
    /** Duration of the item (in seconds) */
    duration?: number;
    
    /** Number of views */
    views?: number;
    
    /** Number of likes */
    likes?: number;
    
    /** Number of dislikes */
    dislikes?: number;
}

/**
 * Metadata for a page
 */
interface PageMetadata {
    /** Title of the page */
    title?: string;
    
    /** Description of the page */
    description?: string;
    
    /** Icon/thumbnail URL for the page */
    icon?: string;
}

/**
 * Metadata for video content
 */
interface VideoMetadata {
    /** Filename of the video */
    filename?: string;
    
    /** Release year of the video */
    year?: number;
    
    /** Title of the video */
    title?: string;
    
    /** Season number (for TV shows) */
    season?: number;
    
    /** Episode number (for TV shows) */
    episode?: number;
    
    /** IMDb ID of the video */
    imdb?: string;
    
    /** Duration of the video (in seconds) */
    duration?: number;
}

/**
 * Represents an item on a page
 */
interface Item {
    /** The page containing this item */
    page: Page;
    
    /** Root property value for the item */
    root: PropValue;

    /**
     * Binds video metadata to the item
     * @param metadata - Video metadata to bind
     */
    bindVideoMetadata(metadata: VideoMetadata): void;
    
    /**
     * Unbinds video metadata from the item
     * @param metadata - Video metadata to unbind
     */
    unbindVideoMetadata(metadata: VideoMetadata): void;
    
    /**
     * Returns a string representation of the item
     */
    toString(): string;
    
    /**
     * Dumps debug information about the item
     */
    dump(): void;
    
    /**
     * Enables the item
     */
    enable(): void;
    
    /**
     * Disables the item
     */
    disable(): void;
    
    /**
     * Destroys an option on the item
     * @param item - The option to destroy
     */
    destroyOption(item: any): void;
    
    /**
     * Adds an action option to the item
     * @param title - Title of the option
     * @param func - Function to execute when selected
     * @param subtype - Subtype of the option
     */
    addOptAction(title: string, func: () => void, subtype: string): PropValue;
    
    /**
     * Adds a URL option to the item
     * @param title - Title of the option
     * @param url - URL to navigate to
     * @param subtype - Subtype of the option
     */
    addOptURL(title: string, url: string, subtype: string): void;
    
    /**
     * Adds a separator to the item's options
     * @param title - Title of the separator
     */
    addOptSeparator(title: string): void;
    
    /**
     * Destroys the item
     */
    destroy(): void;
    
    /**
     * Moves the item before another item
     * @param before - The item to move before
     */
    moveBefore(before: Item): void;
    
    /**
     * Registers an event handler for the item
     * @param type - Type of event to listen for
     * @param callback - Callback function to execute
     */
    onEvent(type: string, callback: (val: any) => void): void;
}

/**
 * Represents a page in Movian
 */
interface Page {
    /** Type of the page */
    type: string;
    
    /** Metadata for the page */
    metadata: PageMetadata;
    
    /** Whether the page is loading */
    loading: boolean;
    
    /** Source of the page content */
    source: string;
    
    /** Number of entries on the page */
    entries: number;
    
    /** Paginator function for loading more content */
    paginator: () => void;
    
    /** Asynchronous paginator function */
    asyncPaginator: () => void;
    
    /** Options for the page */
    options: SettingsGlobalInstance;

    /**
     * Sets whether more content is available
     * @param more - Whether more content is available
     */
    haveMore(more: boolean): void;
    
    /**
     * Finds an item by its property value
     * @param prop - Property value to search for
     */
    findItemByProp(prop: PropValue): Item | undefined;
    
    /**
     * Displays an error message on the page
     * @param msg - Error message to display
     */
    error(msg: string): void;
    
    /**
     * Gets all items on the page
     */
    getItems(): Item[];
    
    /**
     * Appends a new item to the page
     * @param url - URL for the item
     * @param type - Type of the item
     * @param metadata - Metadata for the item
     */
    appendItem(url: string, type: string, metadata: ItemMetadata): Item;
    
    /**
     * Appends an action to the page
     * @param title - Title of the action
     * @param func - Function to execute
     * @param subtype - Subtype of the action
     */
    appendAction(title: string, func: () => void, subtype: string): Item;
    
    /**
     * Appends a passive item to the page
     * @param type - Type of the item
     * @param data - Data for the item
     * @param metadata - Metadata for the item
     */
    appendPassiveItem(type: string, data: string, metadata: ItemMetadata): Item;
    
    /**
     * Dumps debug information about the page
     */
    dump(): void;
    
    /**
     * Flushes the page content
     */
    flush(): void;
    
    /**
     * Redirects to a new URL
     * @param url - URL to redirect to
     */
    redirect(url: string): void;
    
    /**
     * Registers an event handler for the page
     * @param type - Type of event to listen for
     * @param callback - Callback function to execute
     */
    onEvent(type: string, callback: (val: any) => void): void;
}
