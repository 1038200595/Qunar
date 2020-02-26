import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'

Vue.use(Router)

// 多页应用：
// 页面跳转 --> 返回HTML
// 优点：首屏时间快，SEO效果好
// 缺点：页面切换慢

// 单页应用
// 页面跳转 --> JS渲染
// 优点：页面切换快
// 缺点：首屏时间稍慢，SEO差
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/list',
    name: 'List',
    component: List
  }]
})
