<script>
export default {
  name: 'ProjectItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
    },
    description: {
      type: String,
      required: true,
    },
    externalLink: {
      type: Object,
      required: false,
    },
    imageName: {
      type: String,
      required: false,
    },
  },
  computed: {
    imagePath() {
      return `/images/projects/${this.imageName}`
    },
  },
}
</script>
<template lang="pug">
  .project
    img(v-if="imageName" :src="imagePath")
    .info
      h2 {{ title }}
      ul.tags(v-if="tags")
        li(v-for="tag in tags" :key="tag") {{ tag }}
      p {{ description }}
      a(v-if="externalLink" :href="externalLink.target" target="_blank") {{ externalLink.text }}
</template>
<style lang="scss" scoped>
.project {
  background-color: #ccc;
  border-radius: 20px;
  color: black;
  display: grid;
  grid-column-gap: 1em;
  grid-row-gap: 2em;
  grid-template-columns: 2fr 3fr;
  margin: 4em auto;
  padding: 4em 2em;
}
img {
  border-radius: 15px;
  width: 80%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #eee;
  border-radius: 1em;
  color: #555;
  display: inline-block;
  font-weight: 500;
  margin: 0.6em 1em 0.6em 0;
  padding: 0.2em 1em 0.2em 1em;
}

p, a {
  color: black;
}

@media all and (max-width: 700px) {
  .project {
    grid-template-columns: 100%;
    padding-top: 3em;
  }

  img {
    margin: 0 10%;
    width: 80%;
  }
}
</style>
