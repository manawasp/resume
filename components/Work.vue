<script lang="ts" setup>
interface Props {
  works: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <h2 style="margin-top: 0.6rem;">
      <span>{{ props.works.title }}</span>
    </h2>
    <div>
      <div
        v-for="(work, idx) in props.works.data"
        :key="idx"
        class="experience block"
      >
        <h3 class="clear-margin">
          <strong>
            <a :href="work.link" target="_blank">{{ work.company }}</a>
          </strong>
          <span class="info text-muted">{{ work.job }}</span>
        </h3>
        <p class="mt-0 text-muted">
          <small>{{ work.date }} | {{ work.localization }}</small>
        </p>
        <p
          class="mt-small mb-0 text-justify"
          v-html="work.description"
        />
        <div class="mt-small ml-small">
          <div
            v-for="(detail, idj) in work.details"
            :key="idj"
          >
            &ndash; {{ detail }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  line-height: 1.5;
}
</style>
