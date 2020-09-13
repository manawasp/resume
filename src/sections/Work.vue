<template>
  <div class="padding-bottom-30">
    <h3><span>{{$t('titleWorks')}}</span></h3>
    <div v-bind:key="key" v-for="(work, key) in $t('works')" class="experience">
      <h4>
        {{work.job}} -
        <span>{{work.company}}</span>
      </h4>
      <h6 class="grey-a5">{{work.type}}, {{work.date}} {{work.localization}}</h6>
      <div class="margin-top-20 text-justify" v-html="work.description"></div>
      <div class="margin-top-20">
        <span
          v-bind:key="key"
          v-for="(tag, key) in work.tags" class="label label-primary"
        >
          {{tag}}
        </span>
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
