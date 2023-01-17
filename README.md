# nuxt-params-regex

## Usage

Simply register this module, then inside your pages:

```ts
// pages/[param].vue

definePageMeta({ paramsRegex: { param: /[a-zA-Z\S]+/ } })
```

That's it!

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
