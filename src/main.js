// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import Locales from './lang'

Vue.use(VueI18n)

// set lang
let path = window.location.pathname.split('/')
if (path.length > 1 && path[1] === 'fr' || path[1] === 'cn') {
  Vue.config.lang = path[1]
} else {
  Vue.config.lang = 'en'
}

// set locales
Object.keys(Locales).forEach(function (lang) {
  Vue.locale(lang, Locales[lang])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
