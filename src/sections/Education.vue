<template>
  <div class="padding-bottom-30">
    <h3><span>{{$t('titleEducations')}}</span></h3>
    <div v-for="education in $t('educations')">
      <h4>{{education.name}}</h4>
      <h6>{{education.date}}, {{education.localization}}</h6>
      <div class="margin-top-10">
        <div v-for="course in education.courses" class="padding-top-5 font-0-9">
          <i class="fa fa-minus margin-right-5 margin-left-5 grey-6 font-0-7"></i>
          {{ course }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'education'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
