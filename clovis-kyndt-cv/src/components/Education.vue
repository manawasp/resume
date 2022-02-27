<script lang="ts" setup>
</script>

<template>
  <div class="padding-bottom-30">
    <h3><span>{{$t('titleEducations')}}</span></h3>
    <div
      v-for="(education, ide) in $t('educations')"
      v-bind:key="ide"
    >
      <h4>{{education.name}}</h4>
      <h6>{{education.date}}, {{education.localization}}</h6>
      <div class="margin-top-10">
        <div
          v-for="(course, id) in education.courses"
          v-bind:key="id"
          class="padding-top-5 font-0-9"
        >
          &ndash; {{ course }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
