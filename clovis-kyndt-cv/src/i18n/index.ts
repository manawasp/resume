import { createI18n } from 'vue-i18n'

import fr from './fr'
import en from './en'
import cn from './cn'

const i18n = createI18n({
  locale: 'en',
  messages: {
    fr: fr,
    en: en,
    cn: cn
  }
})

export default i18n
