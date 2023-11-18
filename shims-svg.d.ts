declare module '*.svg' {
  import type { VueConstructor } from 'vue'
  import type Vue from 'vue'

  const content: VueConstructor<Vue>
  export default content
}
