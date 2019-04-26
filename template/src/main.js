import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
{{#business}}
import store from './store'
import './mocks'
{{/business}}

new Vue({
  el: '#app',
  {{#business}}
  store,
  {{/business}}
  render: h => h(App)
})
