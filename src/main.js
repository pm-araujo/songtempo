// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './store/store'

import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons'

import VueObserveVisibility from 'vue-observe-visibility/dist/vue-observe-visibility'

Vue.use(VueObserveVisibility)
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
