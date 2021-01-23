<template>
  <div>
    <h3><span>{{$t('titleLanguages')}}</span></h3>
    <div style="margin-top:30px;">
      <div
        v-for="(lang, id) in $t('languages')"
        v-bind:key="id"
        style="display:inline-block;width:33%;float:left"
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

<script>
export default {
  name: 'language'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
