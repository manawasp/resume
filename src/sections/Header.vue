<template>
  <div id="topbar">
    <a href="mailto:clovis.kyndt@gmail.com" target="_blank" class="no-underline hidden-mobile">
      <span
        class="reply-icon"
        v-html="require('!html-loader!./../assets/img/reply.svg')"
      />
      clovis.kyndt@gmail.com
    </a>
    <div class="pull-right" id="lang">
      <a href="/fr" :class="{selected: $i18n.locale === 'fr'}">Français</a> &bull;
      <a href="/en" :class="{selected: $i18n.locale === 'en'}">English</a> &bull;
      <a href="/cn" :class="{selected: $i18n.locale === 'cn'}">中文</a>
    </div>
  </div>
</template>


<script>
import Vue from 'vue'

export default {
  name: 'header'
}
</script>


<style lang="scss">
#topbar {
  padding-left: 50px;
  padding-right: 15px;
}
#lang {
  float: right;
}

#lang a {
  &:hover {
    color: #444;
    text-decoration: underline;
  }
  &.selected {
    color: #444;
  }
}

a {
  .reply-icon svg {
    width: 16px;
    height: 14px;
    float: left;
    padding-top: 3px;
    padding-right: 6px;
    fill: #aaa;
  }
  &:hover .reply-icon svg { fill: #444; }
}
</style>
