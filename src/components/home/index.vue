<script>
export default {
  name: 'Home',
  data() {
    return {
      observer: null,
      activeSkillIndex: 0,
      totalSkillCount: 9,
    }
  },
  created() {
    this.observer = new IntersectionObserver(
      this.onElementObserved,
      {
        threshold: 0.8,
      },
    )
  },
  mounted() {
    this.observer.observe(document.querySelector('#about'))
  },
  methods: {
    skillPlusPlus() {
      this.activeSkillIndex++
      if (this.activeSkillIndex >= this.totalSkillCount) {
        this.activeSkillIndex = 0
      }
    },
    onElementObserved(entries) {
      const el = entries[0]
      if (el.isIntersecting) {
        this.startSkillAnimation()
      }
    },
    startSkillAnimation() {
      setInterval(this.skillPlusPlus, 3800)
    },
  },
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
      p
        ul.mad-skillz
          li.skill(:class="{ active: activeSkillIndex === 0 }") i make websites
          li.skill(:class="{ active: activeSkillIndex === 1 }") useful websites
          li.skill(:class="{ active: activeSkillIndex === 2 }") <i>pretty</i> websites
          li.skill(:class="{ active: activeSkillIndex === 3 }") <b>effective</b> websites
          li.skill(:class="{ active: activeSkillIndex === 4 }") accessible websites
          li.skill(:class="{ active: activeSkillIndex === 5 }") i build deployment pipelines
          li.skill(:class="{ active: activeSkillIndex === 6 }") configure DNS records
          li.skill(:class="{ active: activeSkillIndex === 7 }") pay attention to details
          li.skill(:class="{ active: activeSkillIndex === 8 }") update the docs
      p
        a(href="/projects") take a look around
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

.mad-skillz {
  display: inline;
  padding-left: 0;
  .skill {
    display: none;
  }
  .active {
    animation: fadeinout 4s linear;
    display: inline;
  }
}

@keyframes fadein {
  0% { opacity: 0%; }
  80% { opacity: 0%; }
  100% { opacity: 100%; }
}

@keyframes fadeinout {
  0% { opacity: 0%; }
  40% { opacity: 100%; }
  80% { opacity: 100%; }
  100% { opacity: 0%; }
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
