import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit' // eslint-disable-line

import { name, version } from '../package.json'

export default defineNuxtModule<{}>({
  meta: { name, version },
  setup (_opts, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.build.transpile.push(resolve('./runtime'))
    addPlugin(resolve('./runtime', 'plugin'))
  }
})

declare module 'nuxt/dist/pages/runtime/composables' {
  interface PageMeta {
    paramsRegex?: Record<string, RegExp>
  }
}
