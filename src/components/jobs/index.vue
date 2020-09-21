<script>
export default {
  name: 'Jobs',
}
</script>
<template lang="pug">
  section.jobs
    .job.item
      .copy
        h2 unu GmbH, Berlin 2018 - 2020
        h3 Junior Software Engineer, Full Stack
      a(href="https://unumotors.com/en" target="_blank")
        img(src="/images/jobs/unumotors.png" alt="screenshot of unumotors.com site")
</template>
<style lang="scss" scoped>
.job {
  color: #333;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 80vh;
  overflow: hidden;
  position: relative;
}

.copy {
  margin: 0 5em;
}

img {
  width: 100%;
}

h2 {
  font-size: 35px;
}

a, .copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

a img {
  border: none;
}

@media all and (max-width: 1500px) {
}

@media all and (max-width: 700px) {
  .job {
    grid-template-columns: 1fr;
    min-height: unset;
  }

  .copy {
    margin: 5em 2em;
  }
}
</style>
