<script lang="ts" setup>
interface Props {
  works: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div class="padding-bottom-30">
    <h3><span>{{ props.works.title }}</span></h3>
    <div
      v-for="(work, idx) in props.works.data"
      :key="idx"
      class="experience"
    >
      <h4>
        {{ work.job }} -
        <span>{{ work.company }}</span>
      </h4>
      <h6>{{ work.type }}, {{ work.date }} {{ work.localization }}</h6>
      <div class="margin-top-20 text-justify" v-html="work.description" />
      <div class="margin-top-20">
        <span
          v-for="(tag, key) in work.tags"
          :key="key"
          class="label label-primary"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

