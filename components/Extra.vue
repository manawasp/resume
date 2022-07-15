<script lang="ts" setup>
import HeartIcon from '../assets/icons/heart.svg?raw'
import SportIcon from '../assets/icons/sport.svg?raw'
import BookIcon from '../assets/icons/book.svg?raw'
interface Props {
  interests: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div id="extra">
    <h3><span>{{ props.interests.title }}</span></h3>
    <ul style="padding-left:0;">
      <template v-for="category in props.interests.data">
        <li
          v-for="name in category.names"
          :key="name"
        >
          <span
            v-if="'heart' === category.meta"
            class="svg-icon"
            v-html="HeartIcon"
          />
          <span
            v-else-if="'heartbeat' === category.meta"
            class="svg-icon"
            v-html="SportIcon"
          />
          <span
            v-else-if="'book' === category.meta"
            class="svg-icon"
            v-html="BookIcon"
          />
          {{ name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss">
#extra svg {
  display: inline-block;
  width: 15px;
  height: 15px;
  fill: #505050;
}

.svg-icon {
  float: left;
  height: 16px;
  padding-top: 3px;
  padding-right: 12px;
}
</style>
