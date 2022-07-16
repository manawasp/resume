<script lang="ts" setup>
interface Props {
  educations: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <h3><span>{{ props.educations.title }}</span></h3>
    <div>
      <div
        v-for="(education, idx) in props.educations.data"
        :key="idx"
        class="block"
      >
        <p class="clear-margin">
          <strong>
            {{ education.title }}
          </strong>, <span>
            {{ education.school }}
          </span>
        </p>
        <p class="clear-margin text-muted">
          <small>{{ education.date }} | {{ education.localization }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
