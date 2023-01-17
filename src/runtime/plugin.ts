import { defineNuxtPlugin, addRouteMiddleware } from '#app' // eslint-disable-line

export default defineNuxtPlugin(() => {
  // eslint-disable-next-line require-await
  addRouteMiddleware(async (to) => {
    const paramsRegex: Record<string, RegExp> = to.meta.paramsRegex || {}

    for (const [k, v] of Object.entries(paramsRegex)) {
      if (!to.params[k]) {
        continue
      }
      const param = (Array.isArray(to.params[k]) ? to.params[k][0] : to.params[k]) as string
      if (!v.test(param)) {
        throw createError({ statusCode: 404, statusMessage: 'Invalid params' })
      }
    }
  })
})
