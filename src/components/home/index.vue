<script>
export default {
  name: 'Home',
}
</script>
<template lang="pug">
  section
    .hero
      .copy
        h1 Hi there,
        p
          | My name is
          |
          a(href="#about") Jason
          | .
    #about
      p full stack engineer
      p pretty bad at writing about myself
      p pretty good at writing software
      .picture(src="" alt="jason looking very handsome and competent")

</template>
<style lang="scss" scoped>
section {
  background-color: initial;
  margin: 0;
  scroll-behavior: smooth;
}

.hero {
  background-image: linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%),
    url("../../../public/images/home/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 92vh;
}

.copy {
  font-size: 100px;
  margin: 0 auto 0 10vw;
  padding-top: 10vh;
  text-align: start;
  h1, p {
    margin: 0;
  }
}

h1 {
  font-size: 145px;
}

p {
  color: white;
}
a {
  color: white;
  font-family: inherit;
}

#about {
  height: 100vh;
  padding: 1rem 10vw;
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

@media (max-width: 700px) {
  .hero {
    background-image: linear-gradient(rgba(10,10,10,1) 0%, rgba(0,0,0,0) 20%),
      url("../../../public/images/home/hero-mobile.jpg");
  }
  h1 {
    font-size: 75px;
  }

  p {
    font-size: 50px;
  }

  #about p{
    font-size: 35px;
  }
}
</style>
