<template>
  <div>
    <h3>{{$t('titleEducations')}}</h3>
    <div v-for="education in $t('educations')">
      <h4>{{education.name}}</h4>
      <h6>{{education.date}}, {{education.localization}}</h6>
      <div>
        <span v-for="course in education.courses">{{ course }}</span>
      </div>
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
