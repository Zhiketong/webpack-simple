import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

// import App from './App.vue'

// export default App
