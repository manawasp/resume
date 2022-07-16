<script lang="ts" setup>
interface Props {
  languages: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <h3><span>{{ props.languages.title }}</span></h3>
    <div>
      <div
        v-for="(lang, id) in props.languages.data"
        :key="id"
        class="block"
      >
        <p class="clear-margin">
          <strong>
            {{ lang.lang }}
          </strong>
        </p>
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
