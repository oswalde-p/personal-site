<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false,
    }
  },
  computed: {
    isHome() {
      return this.$route.path === '/'
    },
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
  },
}
</script>
<template lang="pug">
  nav
    router-link.home(to="/" v-if="!isHome")
      img(src="icon-back.svg" height="30px")
    img.menu-icon(src="hamburger.svg" v-on:click="toggleMobileMenu()")
    ul.mobile(v-if="mobileMenuOpen" v-on:click="toggleMobileMenu()")
      li.close ✕
      li
        router-link(to="/projects") Projects
      li
        router-link(to="/contact") Contact
    ul.desktop
      li
        router-link(to="/projects") Projects
      li
        router-link(to="/contact") Contact
</template>
<style lang="scss" scoped>
nav {
  display: flex;
  height: auto;
  font-size: 30px;
  justify-content: space-between;
  margin: 0.6em;
}

ul {
  list-style-type: none;
  height: 60px;
  margin: 0 0 0 auto;
  padding: 0;
}

li {
  display: inline-block;
  height: 100%;
  padding: 0 3vw;
}

a {
  color: white;
  height: 40px;
  padding: 10px;
  text-decoration: none;
  &:visited {
    color: white;
  }
  &:hover {
    color: lightgrey;
  }
  &.router-link-active {
    border-bottom: 2px solid white;
  }
}

.home {
  border: none !important ;
}

.menu-icon{
  display: none;
}

img {
  margin: 0 0.5em;
}

.mobile {
  background-color: rgba( 10, 10, 10, 0.9);
  position: absolute;
  text-align: start;
  top: 0;
  height: auto;
  width: 100%;
  z-index: 1;
  & li {
    display: block;
    padding: 0.5em 1em;
  }
}

.close {
  cursor: pointer;
  margin-right: 0.9em;
  text-align: end;
}

@media all and (max-width: 700px) {
  .desktop {
    display: none;
  }
  .menu-icon {
    display: block;
    margin-left: auto;
  }
}
</style>
