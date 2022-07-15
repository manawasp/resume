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
      class="experience ml-small"
    >
      <p class="clear-margin">
        <strong>
          <a :href="work.link" target="_blank">{{ work.company }}</a>
        </strong>
        <span class="job-title text-muted">{{ work.job }}</span>
      </p>
      <p class="mt-0 text-muted">
        <small>{{ work.date }} | {{ work.localization }}</small>
      </p>
      <p class="mt-small text-justify" v-html="work.description" />
      <p class="mt-small">
        <span
          v-for="(tag, key) in work.tags"
          :key="key"
          class="label label-primary"
        >
          {{ tag }}
        </span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.job-title {
  font-weight: normal;
  padding-left: 0.3rem;
}

.experience {
  line-height: 1.5;
}
</style>
