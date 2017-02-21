<template>
  <div>
    <h3>{{$t('titleWorks')}}</h3>
    <div v-for="work in $t('works')">
      <h4>
        {{work.job}}
        <span>{{work.company}}</span>
      </h4>
      <h6>{{work.type}} {{work.date}} {{work.localization}}</h6>
      <div>
        {{work.describe}}
      </div>
      <div>
        <span v-for="tag in work.tags">{{tag}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
