// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/* ES6中，键和值相同可以省略  components: { App:App } */
new Vue({
  el: '#app',
  router,
  components: { CustomName:App },
  template: '<CustomName/>'
})