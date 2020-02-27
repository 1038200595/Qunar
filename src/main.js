// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)   


/* eslint-disable no-new */
/* ES6中，键和值相同可以省略  components: { App:App } */
new Vue({
  el: '#app',
  router,
  components: { CustomName:App },
  template: '<CustomName/>'
})