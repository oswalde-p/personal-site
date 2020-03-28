<script>
import Header from '@/components/common/header.vue'

export default {
  components: {
    Header,
  },
}
</script>

<template lang="pug">
  #app
    Header
    router-view
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

</style>
