// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'semantic-ui/dist/semantic.min.css'
import locale from 'element-ui/lib/locale/lang/en'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(ElementUI, {locale})
Vue.config.productionTip = false

var VueFire = require('vuefire')
var firebase = require('firebase')
// explicit installation required in module environments
Vue.use(VueFire)

import SweetModal from 'sweet-modal-vue/src/plugin.js'
Vue.use(SweetModal)
import 'animate.css/animate.min.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


