declare module "movian/http" {
    /**
     * Controls HTTP request behavior
     */
    interface HttpControl {


    }

    /**
     * Represents an HTTP response
     */
    interface HttpResponse {
        /** Raw response body as string */
        bytes: string;
        /** Response headers (case-sensitive) */
        readonly headers: Object;
        /** Response headers (lowercase keys) */
        readonly headers_lc: Object;
        /** All headers in original format */
        readonly allheaders: Object;
        /** Multi-value headers */
        readonly multiheaders: Object;
        /** Multi-value headers (lowercase keys) */
        readonly multiheaders_lc: Object;
        /** HTTP status code */
        statuscode: number;
        /** Content-Type header value */
        contenttype: string;


        /**
         * Returns response body as string
         */
        toString(): string;
        
        /**
         * Converts response body from specified encoding
         * @param encoding - The encoding to convert from
         */
        convertFromEncoding(encoding: string): string;

    }

    /**
     * Makes an HTTP request (synchronous)
     * @param url - The URL to request
     * @param ctrl - HTTP control options
     * @returns HTTP response
     */
    export function request(url: string, ctrl: HttpControl): HttpResponse;
    
    /**
     * Makes an HTTP request (asynchronous)
     * @param url - The URL to request
     * @param ctrl - HTTP control options
     * @param callback - Callback function to handle response
     */
    export function request(url: string, ctrl: HttpControl, callback: (err: string, response: HttpResponse) => void);

}
