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
  .project.item
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
  display: grid;
  grid-column-gap: 1em;
  grid-row-gap: 2em;
  grid-template-columns: 2fr 3fr 1fr;
  padding-top: 1em;
}

.info, img {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  box-sizing: border-box;
  padding: 10%;
  margin-left: 5em;
  width: 80%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #333;
  border-radius: 1em;
  color: #eee;
  display: inline-block;
  font-weight: 500;
  margin: 0.6em 1em 0.6em 0;
  padding: 0.2em 1em 0.2em 1em;
}

a {
  color: black;
}

@media all and (max-width: 700px) {
  .project {
    grid-template-columns: 100%;
  }

  img {
    margin: 10%;
    padding: 0;
    width: 80%;
  }

  .info {
    margin: 0 2em 3em;
  }
}
</style>
