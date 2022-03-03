<script lang="ts" setup>
import { getSection } from '../languages'

const projects = getSection().projects
</script>

<template>
  <div class="padding-bottom-30">
    <h3><span>{{ projects.title }}</span></h3>
    <div
      v-for="(project, idx) in projects.data"
      v-bind:key="idx"
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
