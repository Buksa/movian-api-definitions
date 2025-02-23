declare module "movian" {
    global {
        interface Console {
            /**
             * Logs a message to the console
             * @param msg - The message to log
             */
            log(msg: string): void;
            
            /**
             * Logs an error message to the console
             * @param msg - The error message to log
             */
            error(msg: string): void;
        }

        interface Plugin {
            /** Unique identifier for the plugin */
            readonly id: string;
            
            /** URL where the plugin is hosted */
            readonly url: string;
            
            /** Plugin manifest content */
            readonly manifest: string;
            
            /** API version the plugin supports */
            readonly apiversion: number;
            
            /** Filesystem path to the plugin */
            readonly path: string;
        }
    }
}

/**
 * Parameters for video content
 */
declare interface VideoParams {
    /** Title of the video */
    title?: string;
    
    /** Icon/thumbnail URL for the video */
    icon?: string;
    
    /** Disable filesystem scanning for this video */
    no_fs_scan?: boolean;
    
    /** Disable subtitle scanning for this video */
    no_subtitle_scan?: boolean;
    
    /** Canonical URL for the video */
    canonicalUrl?: string;
    
    /** Available video sources */
    sources?: VideoSource[];
    
    /** Available subtitles */
    subtitles?: VideoSubtitle[];
    
    /** IMDb ID for the video */
    imdbid?: string;
    
    /** Release year of the video */
    year?: number;
    
    /** Season number (for TV shows) */
    season?: number;
    
    /** Episode number (for TV shows) */
    episode?: number;
}

/**
 * Video source information
 */
declare interface VideoSource {
    /** URL to the video stream */
    url: string;
    
    /** Bitrate of the video stream (in kbps) */
    bitrate?: number;
    
    /** MIME type of the video stream */
    mimetype?: string;
}

/**
 * Video subtitle information
 */
declare interface VideoSubtitle {
    /** Title of the subtitle track */
    title: string;
    
    /** URL to the subtitle file */
    url: string;
    
    /** Language of the subtitle track */
    language?: string;
    
    /** Source of the subtitle track */
    source?: string;
}
