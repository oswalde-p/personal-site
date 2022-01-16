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
      p software developer and human
      //- p i build deployment pipelines
      p i make websites
      p
        | take a
        |
        a(href="/projects") look around
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 88vh;
  justify-content: space-between;
  padding: 8rem 6vw 1rem;
  position: relative
}

#about p {
  font-size: 50px;
  text-align: start;
  &:nth-child(2) {
    align-self: center;
    max-width: 50vw;
    padding-left: 80px;
  }
  &:nth-child(3) {
    align-self: end;
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

  #about {
    height: 80vh;
    padding: 1rem 2rem;
  }

  #about p{
    font-size: 35px;
  }
}
</style>
