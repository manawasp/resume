<script lang="ts" setup>
interface Props {
  interests: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div id="extra">
    <h3><span>{{ props.interests.title }}</span></h3>
    <div>
      <div
        v-for="(book, id) in props.interests.data"
        :key="id"
        class="block"
      >
        <p class="clear-margin">
          {{ book.title }}
        </p>
        <p class="clear-margin text-muted">
          <small>
            by {{ book.author }}
          </small>
        </p>
      </div>
    </div>
  </div>
</template>
