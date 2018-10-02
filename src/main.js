// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
/* vue-google-maps */
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

/* vue-google-maps */
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC1A8yDYOGEfhgkq0_bjtIW2ICwfVqtzx4',
    libraries: 'places' // necessary for places input
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
