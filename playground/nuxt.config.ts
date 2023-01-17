import { defineNuxtConfig } from 'nuxt/config' // eslint-disable-line

import MyModule from '..'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],

  imports: { autoImport: true }
})
