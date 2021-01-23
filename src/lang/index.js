import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import fr from './fr'
import en from './en'
import cn from './cn'

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    fr: fr,
    en: en,
    cn: cn
  }
})

export default i18n
