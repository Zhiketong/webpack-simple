import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'http://web-api-gateway.yin126.com'
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

export default Vue.http
