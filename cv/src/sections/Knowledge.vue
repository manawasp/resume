<template>
  <div>
    <h3>{{$t('titleEducations')}}</h3>
    <div  style="display:table">
      <ul v-for="knowledge in $t('knowledges')" class="knowledges">
        <li class="title">{{knowledge.title}}</li>
        <li v-for="ability in knowledge.abilities">
          {{ability}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'knowledge'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
