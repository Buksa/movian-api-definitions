# Movian Type Definitions for VSCode

This guide explains how to configure the Movian type definitions in Visual Studio Code for better syntax highlighting and IntelliSense support.

## Credits

The code in this repository was inspired by and adapted from the work in the [movian-plugin-dailymotion](https://github.com/facferreira/movian-plugin-dailymotion/tree/master/src/ts/libs) repository by facferreira.

## Installation

1. **Download the Type Definitions**
   - Clone this repository or download the `libs/movian` directory

2. **Place the Type Definitions in Your Project**
   - Copy the `libs/movian` directory into your project's root folder

3. **Configure VSCode**
   - Open your project in VSCode
   - Create a `jsconfig.json` file in your project root with the following content:

```json
{
    "compilerOptions": {
        "checkJs": true,
        "allowJs": true
    },
    "include": ["**/*.js", "libs/movian/**/*.d.ts"]
}
```

## Using Type Definitions

### Option 1: Automatic Type Discovery (Recommended)
- With the `jsconfig.json` setup, VSCode will automatically discover the type definitions
- No need to add reference comments in your files
- Works for all JavaScript files in your project

### Option 2: Manual Reference (Optional)
- Add this comment at the top of specific files if needed:
```javascript
/// <reference path="libs/movian/movian.d.ts" />
```
- Only necessary if automatic discovery isn't working
- Useful for specific files that need explicit type references

## Features Enabled

After setup, you'll get:

1. **Syntax Highlighting**
   - Proper highlighting for Movian API calls
   - Color-coded parameters and methods

2. **IntelliSense**
   - Auto-completion for Movian API methods
   - Parameter hints and documentation
   - Quick info tooltips

3. **Error Checking**
   - Basic type checking for Movian API usage
   - Warnings for incorrect parameter types

## Example Usage

```javascript
// No reference needed with jsconfig.json setup
var page = new Movian.Page();
page.appendItem("https://example.com", "video", {
    title: "Example Video",
    description: "This is an example video"
});
```

## Troubleshooting

If IntelliSense isn't working:
1. Ensure `jsconfig.json` is in the project root
2. Verify the type definition paths are correct
3. Restart VSCode
4. Check the VSCode JavaScript language server status

## Documentation

For detailed API documentation, refer to the JSDoc comments in each type definition file.
