<script>
export default {
  name: 'Home',
}
</script>
<template lang="pug">
  section
    .hero
      .copy
        h1 hello.
        p
          | my name is
          |
          a(href="#about") jason
    #about
      p full stack developer
      p relocating from 🥨 to ☕
      p bad with words, good with js
      .picture(src="" alt="jason looking very handsome and competent")

</template>
<style lang="scss" scoped>
section {
  scroll-behavior: smooth;
}

.hero {
  background-image: linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%),
    url("../../../public/images/home/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 100px;
  height: 92vh;
}

.copy {
  margin: 0 auto 0 10vw;
  padding-top: 10vh;
  text-align: start;
  h1, p {
    margin: 0;
  }
}

a {
  color: white;
  font-family: inherit;
}

#about {
  margin: 0 10vw;
  position: relative
}

#about p {
  font-size: 80px;
  margin: 2em 0;
  text-align: start;
  &:nth-child(2) {
    text-align: end;
  }
}

.picture {
  border: 1px solid red;
  height: 400px;
  position: absolute;
  left: 4vw;
  top: 10vh;
  width: 500px;
}

@media all and (max-width: 700px) {
  .hero {
    background-image: linear-gradient(rgba(10,10,10,1) 0%, rgba(0,0,0,0) 20%),
      url("../../../public/images/home/hero-mobile.jpg");
    font-size: 50px;
  }

  #about p{
    font-size: 35px;
  }

  .picture {
    left: 0;
    height: 250px;
    width: 200px;
  }
}
</style>
