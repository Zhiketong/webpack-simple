<template>
  <div id="app">
    <Com></Com>
  </div>
</template>

<script>
import Com from './components/index.vue'
export default {
  name: 'app',
  components: {
    Com
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
