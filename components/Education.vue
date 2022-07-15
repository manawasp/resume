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
    >
      <h4>{{ education.name }}</h4>
      <h6>{{ education.date }}, {{ education.localization }}</h6>
      <div class="margin-top-10">
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
