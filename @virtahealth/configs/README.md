# Configs

This repo contains shared config files for different tools that are used at Virta

The goal is to share these configs across repos so that we can standardize how these tools are used

If possible, configs should be used as-is with only the customizations necessary to make them work for a particular repo

For some configs, it will be necessary to for the repo using the config to override some values (for example, file paths). If such customization or other special steps are necessary, they should be called out in this README to make it easier for future developers to maintain this work

## File Structure

In order to avoid any confusion, configs that are necessary to the `configs` package are found in the root of this package. The shared configs that are published to consumers will be found in the `/src` folder

## TSConfig

### Overrides

Common overrides include:

- `jsx` - specify the type of JSX used in the project, if you're using it
- `esModuleInterop` - required by some non-compliant libraries
- `allowSyntheticDefaultImports` - may be needed by some libraries
- `noEmit` - specify if you're **not** saving the output
- `declaration` - enable if you want `.d.ts` files to be generated
- file paths - see below

#### File paths

In TSConfig, any file paths specified are relative to the file that originally included the path. So we cannot specify things like the `include` path in the shared TSConfig because those paths would be relative to this package and not the project uses this shared config

Common file paths include:

- `outDir` - the path to the location where you're compiled code will be saved. Only necessary if you're saving the compiled output
- `include` - the paths to the location of your code & additional types
- `rootDir` - used when compiling to help generate the file structure
- `exclude` - files/folders to exclude from compilation

## Babel Config

Using the Babel config to compile your app will require the following dependencies be installed (see the Atlas root `package.json` for the version):

- metro-react-native-babel-preset
