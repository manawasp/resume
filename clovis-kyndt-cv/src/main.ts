import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import i18n from './i18n'
import App from './App.vue'

createApp(App).use(i18n).mount('#app')
