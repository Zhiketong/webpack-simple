<template>
  <div class="demo">
    <span>app</span>
    <button @click="fetch">fetch</button>
  </div>
</template>

<script>
  import demoModule from '@/store/modules/demo'
  
  export default {
    name: 'demo',
    beforeCreate () {
      this.$store.registerModule('demo', demoModule)
    },
    created () {
      this.$store.commit('UPDATE', {})
    },
    beforeDestroy () {
      this.$store.commit('UN_REGISTER_MODULE')
    },
    methods: {
      fetch () {
        this.$store.dispatch('fetchApi')
      }
    }
  }
</script>

<style scoped>
  .demo {}
</style>
    