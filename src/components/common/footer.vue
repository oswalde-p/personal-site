<script>
export default {
  name: 'Footer',
}
</script>
<template lang="pug">
  .footer
    ul
      li
        a(href="https://github.com/oswalde-p" target="_blank")
          img(src="/images/footer/Github-Mark-Light-64px.png" alt="github")
      li
        a(href="https://twitter.com/jasonpursey" target="_blank")
          img(src="/images/footer/Twitter_Social_Icon_Circle_White.png" alt="twitter")
      li
        a(href="https://www.linkedin.com/in/jason-pursey/" target="_blank")
          img(src="/images/footer/LI-In-Bug.png" alt="linkedin")
      li
        a(href="https://www.facebook.com/the.jason.pursey" target="_blank")
          img(src="/images/footer/f_logo_RGB-White_72.png" alt="facebook")
    p © 2020 jason pursey
</template>
<style lang="scss" scoped>

.footer {
  border-top: 1px solid gray;
  padding-top: 3em;
  margin: 0 20vw 5vh;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  padding: 0 1em;
}

img {
  height: 30px;
}

@media all and (max-width: 700px) {
  .footer {
    margin: 0 10vw 5vh;
  }
}
</style>
