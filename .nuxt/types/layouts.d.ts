import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/manawasp/projects/clovis-kyndt-cv/node_modules/.pnpm/nuxt@3.0.0-rc.5_sass@1.53.0+webpack@5.73.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}