module.exports = {
  vueTemplate: (componentName) => {
    return `<template>
  <div class="${componentName}">
    ${componentName}组件
  </div>
</template>

<script>
  export default {
    name: '${componentName}'
  }
</script>

<style scoped>
  .${componentName} {}
</style>
    `
  } 
}
