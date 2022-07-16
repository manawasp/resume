<script lang="ts" setup>
interface Props {
  projects: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <h3><span>{{ props.projects.title }}</span></h3>
    <div>
      <div
        v-for="(project, idx) in props.projects.data"
        :key="idx"
        class="project block"
      >
        <p class="clear-margin">
          <strong>
            {{ project.title }}
          </strong> <span class="text-muted" style="margin-left:.3rem">
            {{ project.subtitle }}
          </span>
        </p>
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
  </div>
</template>
