<script>
export default {
  name: 'Jobs',
}
</script>
<template lang="pug">
  section.jobs
    .job
      .copy
        h2 unu GmbH, Berlin 2018 - 2020
        h3 Junior Software Engineer, Full Stack
      a(href="https://unumotors.com/en" target="_blank")
        img(src="/images/jobs/unumotors.png" alt="screenshot of unumotors.com site")
</template>
<style lang="scss" scoped>
.job {
  background-color: #FFDE00;
  color: #333;
  overflow: hidden;
}

.copy {
  float: left;
  padding: 4em 0 1em 4em;
  min-height: 13em;
  width: 40%;
}

img {
  float: right;
  width: 50%;
}

h2 {
  font-size: 35px;
}

a img {
  border: none;
}

@media all and (max-width: 1500px) {
  .copy {
  padding: 2em;
    width: unset;
  }
  img {
    float: none;
    margin-bottom: -0.5em;
    width: 100%;
  }
}

@media all and (max-width: 700px) {

}
</style>
