declare module "movian/html" {
    /**
     * Parses HTML string into a DOM structure
     * @param html - The HTML string to parse
     * @returns Parsed HTML document structure
     */
    export function parse(html: string): Html;

}

/**
 * Represents a parsed HTML document
 */
interface Html {
    /** The root document node */
    document: HtmlNode;
    /** The root element node */
    root: HtmlNode;
}


/**
 * Represents a node in the HTML DOM
 */
interface HtmlNode {
    /** Name of the node (e.g., "div", "span") */
    readonly nodeName: string;
    /** Type of the node (e.g., element, text) */
    readonly nodeType: string;
    /** Array of child nodes */
    readonly children: HtmlNode[];
    /** Text content of the node */
    readonly textContent: string;
    /** Attributes of the node */
    readonly attributes: any; // TODO type of attributes?


    /**
     * Finds a node by its ID
     * @param id - The ID to search for
     * @returns The matching node or undefined
     */
    getElementById(id: string): HtmlNode;
    
    /**
     * Finds nodes by class name
     * @param className - The class name to search for
     * @returns Array of matching nodes
     */
    getElementByClassName(className: string): HtmlNode[];
    
    /**
     * Finds nodes by tag name
     * @param tag - The tag name to search for
     * @returns Array of matching nodes
     */
    getElementByTagName(tag: string): HtmlNode[];

}
