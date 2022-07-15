<script lang="ts" setup>
interface Props {
  projects: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div class="padding-bottom-30">
    <h3><span>{{ props.projects.title }}</span></h3>
    <div
      v-for="(project, idx) in props.projects.data"
      :key="idx"
      class="project"
    >
      <h4>{{ project.title }}</h4>
      <h6>{{ project.subtitle }}</h6>
      <div>
        <p v-html="project.describe" />
      </div>
      <div>
        <span
          v-for="(tag, idt) in project.tags"
          :key="idt"
          class="label label-primary"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
