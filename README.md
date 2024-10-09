# Quasar 2 with FSD architecture

The project is configured for Feature-Sliced Design architecture

## Includes

- TypeScript
- EsLint
- Dprint
- i18n

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Build the app for production

```bash
quasar build
```

### About formatter

See [dprint repository](https://github.com/dprint/dprint) or [site](https://dprint.dev/)

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

**Attention!**

> The file `/src/app/store-flag.d.ts` is automatically moved to the directory `/src/shared/types/store-flag.d.ts`
> To disable this, comment out `fsdFix()` in `quasar.config.js`
