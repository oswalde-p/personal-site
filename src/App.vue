<script>
import Header from '@/components/common/header.vue'
import Footer from '@/components/common/footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<template lang="pug">
  #app
    Header
    router-view
    Footer
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

</style>
