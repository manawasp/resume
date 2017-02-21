<template>
  <div>
    <h3>{{$t('titleLanguages')}}</h3>
    <div>
      <div v-for="lang in $t('languages')">
        <h4>{{lang.lang}}</h4>
        <h6>
          {{lang.level}}<br/>{{lang.comment}}
        </h6>
      </div>
    </div>
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
