<script lang="ts" setup>
import HeartIcon from '../assets/img/heart.svg'
import SportIcon from '../assets/img/sport.svg'
import BookIcon from '../assets/img/book.svg'
import { getSection } from '../languages'

const interests = getSection().interests
</script>

<template>
  <div id="extra">
    <h3><span>{{interests.title}}</span></h3>
    <ul style="padding-left:0;">
      <template v-for="categorie in interests.data">
        <li
          v-for="name in categorie.names"
          v-bind:key="name"
        >
          <span
            v-if="'heart' === categorie.meta"
            class="svg-icon"
          >
            <HeartIcon />
          </span>
          <span
            v-else-if="'heartbeat' === categorie.meta"
            class="svg-icon"
          >
            <SportIcon />
          </span>
          <span
            v-else-if="'book' === categorie.meta"
            class="svg-icon"
          >
            <BookIcon />
          </span>
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
