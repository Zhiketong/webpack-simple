import Vue from 'vue'
import App from './App.vue'
{{#business}}
import store from './store'
{{/business}}
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  el: '#app',
  {{#business}}
  store,
  {{/business}}
  render: h => h(App)
})

// import App from './App.vue'

// export default App
