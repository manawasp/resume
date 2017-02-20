<template>
  <div>
    <h3>titleEducations</h3>
    <div v-for="education in $t('educations')">
      <li v-for="course in education.courses">{{ course }}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'education'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
