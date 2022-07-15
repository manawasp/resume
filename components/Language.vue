<script lang="ts" setup>
interface Props {
  languages: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <h3><span>{{ props.languages.title }}</span></h3>
    <div style="margin-top:30px;">
      <div
        v-for="(lang, id) in props.languages.data"
        v-bind:key="id"
        style="width:33%;float:left"
      >
        <h4 style="margin:0">{{lang.lang}}</h4>
        <h6 style="margin-top:5px;">
          {{lang.level}}<br/>{{lang.comment}}
        </h6>
      </div>
    </div>
    <div style="clear:both;margin-bottom:30px"></div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
