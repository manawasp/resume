<script lang="ts" setup>
import HeartIcon from '../assets/img/heart.svg?raw'
import SportIcon from '../assets/img/sport.svg?raw'
import BookIcon from '../assets/img/book.svg?raw'
interface Props {
  interests: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div id="extra">
    <h3><span>{{props.interests.title}}</span></h3>
    <ul style="padding-left:0;">
      <template v-for="categorie in props.interests.data">
        <li
          v-for="name in categorie.names"
          v-bind:key="name"
        >
          <span
            v-if="'heart' === categorie.meta"
            class="svg-icon"
            v-html="HeartIcon"
          />
          <span
            v-else-if="'heartbeat' === categorie.meta"
            class="svg-icon"
            v-html="SportIcon"
          />
          <span
            v-else-if="'book' === categorie.meta"
            class="svg-icon"
            v-html="BookIcon"
          />
          {{name}}
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
