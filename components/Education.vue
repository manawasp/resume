<script lang="ts" setup>
interface Props {
  educations: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <h2><span>{{ props.educations.title }}</span></h2>
    <div>
      <div
        v-for="(education, idx) in props.educations.data"
        :key="idx"
        class="block"
      >
        <h3 class="clear-margin">
          <strong>
            {{ education.title }}
          </strong> <span class="text-muted info">
            {{ education.school }}
          </span>
        </h3>
        <p class="clear-margin text-muted">
          <small>{{ education.date }} | {{ education.localization }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
