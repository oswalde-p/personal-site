<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false,
    }
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
    router-link.home(to="/") ?J=P
    img.menu-icon(src="hamburger.svg" v-on:click="toggleMobileMenu()")
    ul.mobile(v-if="mobileMenuOpen" v-on:click="toggleMobileMenu()")
      li.close ✕
      li
        router-link(to="/jobs") Employment
      li
        router-link(to="/projects") Projects
      li
        router-link(to="/contact") Contact
    ul.desktop
      li
        router-link(to="/jobs") Employment
      li
        router-link(to="/projects") Projects
      li
        router-link(to="/contact") Contact
</template>
<style lang="scss" scoped>
nav {
  display: flex;
  flex-flow: spread;
  font-size: 30px;
  justify-content: space-between;
  padding: 0.4em 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  padding: 0 3vw;
  &:not(:last-child) {
    border-right: 0.5px solid white;
  }
}

a {
  text-decoration: none;
  &:visited {
    color: white;
  }
  &.router-link-active {
    color: gray;
  }
}

.home {
  color: white !important ;
  font-size: 40px;
  margin: 0 0 0 1em;
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
  width: 100%;
  & li {
    display: block;
    padding: 0.5em 1em;
  }
}

.close {
  cursor: pointer;
  text-align: end;
}

@media all and (max-width: 700px) {
  .desktop {
    display: none;
  }
  .menu-icon {
    display: block;
  }
}
</style>
