// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Store from './store/store'

import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons'

Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  Store,
  components: { App }
})