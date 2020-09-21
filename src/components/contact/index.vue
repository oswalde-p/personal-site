<script>
export default {
  name: 'Contact',
  data() {
    return {
      guhrliFeedback: 'https://docs.google.com/forms/d/e/1FAIpQLSe3SfjjI82as9g3NMB92WW4QNnqbMl6AKtyLKm0t1LB2R7Ziw/viewform', // eslint-disable-line max-len
      guhrliIssue: 'https://github.com/oswalde-p/guhrli/issues/new',
      supportEmail: 'support@jasonpursey.com',
      jobsEmail: 'hello@jasonpursey.com',
    }
  },
}
</script>
<template lang="pug">
  section
    h1 Support
    p
      | For help with any project, you can get in touch through the social media links below, or send an email to
      |
      a(:href="`mailto:${supportEmail}`") {{ supportEmail }}
    h3 guhrli
    p
      | Bug reports and feedback are very welcome and can be submitted through the
      |
      a(:href="guhrliFeedback" target="_blank") feedback form
      | . Alternatively, you can
      |
      a(:href="guhrliIssue" target="_blank") open an issue on github.
    h1 Recruitment
    p
      | Looking for your next engineer? Great! Reach out on
      |
      a(href="https://www.linkedin.com/in/jason-pursey/" target="_blank") LinkedIn
      |
      | or
      |
      a(:href="`mailto:${jobsEmail}`") email me
</template>
<style lang="scss" scoped>
  section {
    margin: 5em 20%;
  }

  h3 {
    margin-top: 3em;
  }
</style>
