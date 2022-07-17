<script lang="ts" setup>
interface Props {
  projects: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <h2><span>{{ props.projects.title }}</span></h2>
    <div>
      <div
        v-for="(project, idx) in props.projects.data"
        :key="idx"
        class="project block"
      >
        <h3 class="clear-margin">
          <strong>
            {{ project.title }}
          </strong> <span class="text-muted info">
            {{ project.subtitle }}
          </span>
        </h3>
        <div class="text-justify">
          <p v-html="project.describe" />
        </div>
      </div>
    </div>
  </div>
</template>
