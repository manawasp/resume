<script lang="ts" setup>
interface Props {
  value: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div style="display:block">
    <div
      v-for="(col, key) in props.value"
      :key="key"
      class="knowledges"
    >
      <ul class="font-sm">
        <div style="margin:0 30px 40px 0">
          <li class="title">
            {{ col.header }}
          </li>
          <li
            v-for="(row, j) in col.rows"
            :key="j"
          >
            {{ row }}
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
