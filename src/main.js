import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import fastClick from 'fastclick'
import Axios from 'axios'
import store from'./store/index.js'
import 'babel-polyfill'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios=Axios
fastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(router)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
