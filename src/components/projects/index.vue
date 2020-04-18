<script>
import ProjectItem from './projectItem.vue'
import projectData from './projects.json'

export default {
  name: 'Projects',
  components: {
    ProjectItem,
  },
  data() {
    return {
      projectData,
    }
  },
}
</script>
<template lang="pug">
  section
    ProjectItem(v-for="project in projectData",
    :key="project.title",
    :title="project.title",
    :tags="project.tags",
    :description="project.description",
    :externalLink="project.externalLink",
    :imageName="project.imageName" )
</template>
