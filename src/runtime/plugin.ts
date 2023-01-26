import { defineNuxtPlugin, addRouteMiddleware, abortNavigation } from '#app' // eslint-disable-line

export default defineNuxtPlugin(() => {
  // eslint-disable-next-line require-await
  addRouteMiddleware(async (to) => {
    const paramsRegex: Record<string, RegExp> = to.meta.paramsRegex || {}

    for (const [k, _v] of Object.entries(to.params)) {
      if (!paramsRegex[k]) {
        continue
      }
      const v = (Array.isArray(_v) ? _v[0] : _v)
      if (!paramsRegex[k].test(v)) {
        return abortNavigation()
      }
    }
  })
})
