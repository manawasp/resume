<script lang="ts" setup>
interface Props {
  languages: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <h2><span>{{ props.languages.title }}</span></h2>
    <div>
      <div
        v-for="(lang, id) in props.languages.data"
        :key="id"
        class="block"
      >
        <h3 class="clear-margin">
          {{ lang.lang }}
        </h3>
        <p class="clear-margin text-muted">
          <small>
            {{ lang.level }}
            <span v-if="lang.comment">, {{ lang.comment }}</span>
          </small>
        </p>
      </div>
    </div>
  </div>
</template>
