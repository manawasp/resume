<script lang="ts" setup>
interface Props {
  value: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div
    v-for="(block, idx) in props.value"
    :key="idx"
    class="block"
  >
    <h3 class="clear-margin">
      <a v-if="block.url" :href="block.url" target="_blank">
        <strong>
          {{ block.title }}
        </strong>
      </a>
      <span v-else>
        <strong>{{ block.title }}</strong>
      </span> <span class="text-muted info">
        {{ block.suffix }}
      </span>
    </h3>
    <p class="clear-margin text-muted">
      <small>{{ block.extra }}</small>
    </p>
    <p class="content">
      {{ block.description }}
    </p>
    <div class="mt-small ml-small content">
      <div
        v-for="(detail, idj) in block.details"
        :key="idj"
      >
        &ndash; {{ detail }}
      </div>
    </div>
  </div>
</template>
