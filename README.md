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

[Rest of the README content remains unchanged...]
