import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: require('./assets/error/error.png'),
  loading: require('./assets/loading/loading-white.gif'),
  attempt: 2,
})
