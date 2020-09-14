<template>
  <div class="padding-bottom-30">
    <h3><span>{{$t('titleProjects')}}</span></h3>
    <div
      v-for="(project, id) in $t('projects')"
      v-bind:key="id"
      class="project"
    >
      <h4>{{project.title}}</h4>
      <h6>{{project.subtitle}}</h6>
      <div>
        <p v-html="project.describe"></p>
      </div>
      <div>
        <span
          v-for="(tag, idt) in project.tags"
          v-bind:key="idt"
          class="label label-primary"
        >
          {{tag}}
        </span>
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
