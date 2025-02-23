declare module "movian/service" {
    /**
     * Represents a service in Movian
     */
    interface Service {
        /** Unique identifier for the service */
        id: any;
        
        /** Whether the service is enabled */
        enabled: boolean;

        /**
         * Destroys the service
         */
        destroy(): void;
    }

    /**
     * Creates a new service
     * @param title - Title of the service
     * @param url - URL for the service
     * @param type - Type of the service
     * @param enabled - Whether the service is enabled
     * @param icon - Icon for the service
     * @returns The created Service instance
     */
    export function create(title: string, url: string, type: string, enabled: boolean, icon: string): Service;
}
