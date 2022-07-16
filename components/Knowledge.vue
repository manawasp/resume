<script lang="ts" setup>
interface Props {
  knowledges: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <h3><span>{{ props.knowledges.title }}</span></h3>
    <div style="display:block">
      <div
        v-for="(knowledge, key) in props.knowledges.data"
        :key="key"
        class="knowledges"
      >
        <ul class="font-sm">
          <div style="margin:0 30px 40px 0">
            <li class="title">
              {{ knowledge.title }}
            </li>
            <li
              v-for="(ability, j) in knowledge.abilities"
              :key="j"
            >
              {{ ability }}
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
