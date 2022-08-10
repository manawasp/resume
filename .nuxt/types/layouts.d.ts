import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/cky/perso/resume/node_modules/.pnpm/nuxt@3.0.0-rc.6_sass@1.54.4+webpack@5.74.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}