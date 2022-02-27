<script lang="ts" setup>
</script>

<template>
  <div id="extra">
    <h3><span>{{$t('titleInterests')}}</span></h3>
    <ul style="padding-left:0;">
      <template v-for="categorie in $t('interests')">
        <li
          v-for="name in categorie.names"
          v-bind:key="name"
        >
          <span
            v-if="'heart' === categorie.meta"
            class="svg-icon"
            v-html="require('!html-loader!./../assets/img/heart.svg')"
          />
          <span
            v-else-if="'heartbeat' === categorie.meta"
            class="svg-icon"
            v-html="require('!html-loader!./../assets/img/sport.svg')" />
          <span
            v-else-if="'book' === categorie.meta"
            class="svg-icon"
            v-html="require('!html-loader!./../assets/img/book.svg')" />
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
