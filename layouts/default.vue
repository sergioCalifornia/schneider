<template>
  <Nuxt />
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      script: [
        { src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js', type: 'module' }
      ]
    }
  }
}
</script>
