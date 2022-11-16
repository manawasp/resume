import dayjs from 'dayjs'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    BUILD_TIME: dayjs().format('MMMM D, YYYY'),
  },
  vite: {
    plugins: [
      svgLoader({
      }),
    ],
  },
})
