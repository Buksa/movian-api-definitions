declare module "movian/http" {
    /**
     * Controls HTTP request behavior
     */
    /**
     * Controls HTTP request behavior
     * @property args - Request arguments/parameters
     * @property headers - Request headers
     * @property method - HTTP method (GET, POST, etc.)
     * @property timeout - Request timeout in milliseconds
     * @property debug - Enable debug logging
     * @property noFollow - Disable following redirects
     * @property compression - Enable compression
     * @property noAuth - Disable authentication
     * @property noFail - Return content even on error
     * @property verifySSL - Enable SSL certificate verification
     * @property headRequest - Make a HEAD request instead of GET
     * @property cacheTime - Minimum cache time in seconds
     * @property caching - Enable response caching
     */
    interface HttpControl {
        args?: any;
        headers?: {[key: string]: string};
        method?: string;
        timeout?: number;
        debug?: boolean;
        noFollow?: boolean;
        compression?: boolean;
        noAuth?: boolean;
        noFail?: boolean;
        verifySSL?: boolean;
        headRequest?: boolean;
        cacheTime?: number;
        caching?: boolean;




    }

    /**
     * Represents an HTTP response
     * @property bytes - Raw response body as string
     * @property headers - Response headers (case-sensitive)
     * @property headers_lc - Response headers (lowercase keys)
     * @property allheaders - All headers in original format
     * @property multiheaders - Multi-value headers
     * @property multiheaders_lc - Multi-value headers (lowercase keys)
     * @property statuscode - HTTP status code
     * @property contenttype - Content-Type header value
     * 
     * @example
     * // Accessing response data
     * const res = http.request('https://example.com', {});
     * console.log(res.statuscode); // 200
     * console.log(res.headers['Content-Type']); // 'text/html'
     */
    interface HttpResponse {
        /** Raw response body as string */
        bytes: string;
        /** Response headers (case-sensitive) */
        readonly headers: {[key: string]: string};
        /** Response headers (lowercase keys) */
        readonly headers_lc: {[key: string]: string};
        /** All headers in original format */
        readonly allheaders: string[];
        /** Multi-value headers */
        readonly multiheaders: {[key: string]: string[]};
        /** Multi-value headers (lowercase keys) */
        readonly multiheaders_lc: {[key: string]: string[]};
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
     * Makes an HTTP request
     * @param url - The URL to request (must start with http:// or https://)
     * @param ctrl - HTTP control options
     * @returns HTTP response (synchronous version)
     * 
     * @example
     * // Simple GET request
     * const res = http.request('https://example.com', {});
     * 
     * @example
     * // POST request with form data
     * const res = http.request('https://example.com', {
     *   method: 'POST',
     *   postdata: { key1: 'value1', key2: 'value2' }
     * });
     */
    export function request(url: string, ctrl: HttpControl): HttpResponse;
    
    /**
     * Makes an HTTP request with callback
     * @param url - The URL to request (must start with http:// or https://)
     * @param ctrl - HTTP control options
     * @param callback - Callback function to handle response
     * @param callback.err - Error message if request failed
     * @param callback.response - HTTP response if successful
     * 
     * @example
     * // Async GET request
     * http.request('https://example.com', {}, (err, res) => {
     *   if (err) console.error(err);
     *   else console.log(res);
     * });
     */
    export function request(url: string, ctrl: HttpControl, callback: (err: string, response: HttpResponse) => void);



}
