<script lang="ts" setup>
interface Props {
  locale: string
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div id="topbar">
    <div id="lang" class="pull-right">
      <NuxtLink to="/fr" :class="{ selected: props.locale === 'fr' }">
        Français
      </NuxtLink> &bull;
      <NuxtLink to="/" :class="{ selected: props.locale === 'en' }">
        English
      </NuxtLink> &bull;
      <NuxtLink to="/cn" :class="{ selected: props.locale === 'cn' }">
        中文
      </NuxtLink>
    </div>
  </div>
</template>

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
