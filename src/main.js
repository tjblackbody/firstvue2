import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/yangshi/quanjude.less'
import 'reset-css'
import SlideVerify from 'vue-monoplasty-slide-verify'
Vue.use(SlideVerify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
