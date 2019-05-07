<template lang="html">
  <div class="component-{{name}}">
    {{name}}
  </div>
</template>

<script>
export default {
  name: "{{name}}",
  props: {
    query: {
      type: Object,
      default () {
        return {}
      }
    },
    params: {
      type: Object,
      default () {
        return {}
      }
    },
    search: {
      type: Object,
      default () {
        return {}
      }
    },
    auth: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style{{#less}} lang="less"{{/less}} scoped>
</style>
