<template lang="html">
  <div class="component-{{name}}">
    {{name}}
  </div>
</template>

<script>
export default {
  name: "{{name}}"
}
</script>

<style{{#sass}} lang="scss"{{/sass}}>
  .component-{{name}} {
    
  }
</style>
