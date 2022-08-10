<script lang="ts" setup>
interface Props {
  value: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div class="block text-justify">
    <p v-for="(text, idx) in props.value" :key="idx" class="block">
      {{ text }}
    </p>
  </div>
</template>
