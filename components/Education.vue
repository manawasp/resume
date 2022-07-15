<script lang="ts" setup>
interface Props {
  educations: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div class="padding-bottom-30">
    <h3><span>{{ props.educations.title }}</span></h3>
    <div
      v-for="(education, idx) in props.educations.data"
      :key="idx"
      class="margin-bottom-30 ml-small "
    >
      <p class="clear-margin">
        <strong>{{ education.name }}</strong>
      </p>
      <p class="clear-margin text-muted">
        <small>{{ education.date }} | {{ education.localization }}</small>
      </p>
      <div class="mt-small">
        <div
          v-for="(course, id) in education.courses"
          :key="id"
          class="padding-top-5 font-0-9"
        >
          &ndash; {{ course }}
        </div>
      </div>
    </div>
  </div>
</template>
