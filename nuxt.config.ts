import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [
      svgLoader({
        /* ... */
      }),
    ],
  },
})

// // import { defineNuxtConfig } from 'nuxt3'
// // import { addVitePlugin } from '@nuxt/kit'
// import { defineNuxtConfig } from 'nuxt3'
// import content from '@originjs/vite-plugin-content'
// import svgLoader from 'vite-svg-loader'

// export default defineNuxtConfig({
//     ssr: false,
//     vite: {
//         plugins: [
//           content(), svgLoader()
//       ]
//     }
// })

// // addVitePlugin(content(), {})
// // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
// // export default defineNuxtConfig({
// //   // buildModules: ['@intlify/nuxt3'],
// //   addVitePlugin:
// //   // config for `@intlify/nuxt3`
// //   // intlify: {
// //   //   vueI18n: {
// //   //     // You can setting same `createI18n` options here !
// //   //     locale: 'en',
// //   //     messages: {
// //   //       en: {
// //   //         hello: 'Hello'
// //   //       },
// //   //       ja: {
// //   //         hello: 'こんにちは'
// //   //       }
// //   //     }
// //   //   }
// //   // }
// // })
