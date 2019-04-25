<template lang="html">
  <div class="{{name}}">
    {{name}}
  </div>
</template>

<script>
import demoModule from '@/store/modules/demo'

export default {
  name: "{{name}}",
  {{#business}}
  beforeCreate () {
    this.$store.registerModule('demo', demoModule)
  },
  created () {
    this.$store.dispatch('demo/testjava')
  },
  beforeDestroy () {
    this.$store.unregisterModule('demo')
  }
  {{/business}}
}
</script>

<style lang="less"{{#business}} scoped{{/business}}>
</style>
