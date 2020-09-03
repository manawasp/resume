// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import i18n from './lang'

Vue.use(VueI18n)

// // set lang
let path = window.location.pathname.split('/')
i18n.locale = path.length > 1 && path[1] === 'fr' || path[1] === 'cn' ? path[1] : 'en'

/* eslint-disable no-new */
new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
