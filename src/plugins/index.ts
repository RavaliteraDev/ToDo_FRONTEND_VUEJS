/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { pinia } from './pinia'
import { router } from './vue-router'
import { vuetify } from './vuetify'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app.use(pinia)
  app.use(router)
  app.use(vuetify)
}
