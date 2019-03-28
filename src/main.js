// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.min.css'
import './styles/base/reset.css'
import './styles/element-ui/custom-style.css'
import './styles/base/font-base.css'
import api from './component/API/index'
axios.defaults.timeout = 5000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true
axios.interceptors.response.use(
  response => {
    if (response.status === 5) {
      router.push({
        path: '/login'
      })
    }
    return response
  },
  error => {
    return Promise.reject(error.response.data)
  }
)
Vue.prototype.$axios = axios
Vue.prototype.$elMessage = ElementUI.Message
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(api)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

router.beforeEach(function (to, from, next) {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
