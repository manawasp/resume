<template>
  <div>
    <h3>{{$t('titleProjects')}}</h3>
    <div v-for="project in $t('projects')" class="project">
      <h4>{{project.title}}</h4>
      <h6>{{project.subtitle}}</h6>
      <div>
        <p v-html="project.describe"></p>
      </div>
      <div>
        <span v-for="tag in project.tags" class="label label-primary">{{tag}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
