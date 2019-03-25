import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
{{#mock}}
import './mocks'
{{/mock}}

Vue.use(VueResource)
Vue.http.options.root = process.env.GATEWAY_URL
Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.headers.common.Authorization = localStorage.token

Vue.http.graphql = function (query, variables) {
  var data = {
    query,
    variables
  }
  return Vue.http.post.call(this, 'graphql', data)
}

new Vue({
  el: '#app',
  render: h => h(App)
})
