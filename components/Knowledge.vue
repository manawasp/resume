<script lang="ts" setup>
interface Props {
  knowledges: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <h3><span>{{ props.knowledges.title }}</span></h3>
    <div style="display:block" class="margin-top-5 margin-bottom-20">
      <div
        v-for="(knowledge, key) in props.knowledges.data"
        :key="key"
        class="knowledges"
      >
        <ul style="padding:0">
          <div style="margin:20px 30px 20px 0">
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
