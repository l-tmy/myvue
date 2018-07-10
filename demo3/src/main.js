// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import IndexPage from './components/indexpage'
import store from './store'
Vue.use(Router)
Vue.use(VueResource)
Vue.config.productionTip = false
let router=new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Layout },
  template: '<Layout/>'
})
