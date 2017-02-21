<template>
  <div>
    <h3>{{$t('titleEducations')}}</h3>
    <div>
      <div v-for="knowledge in $t('knowledges')">
        <ul>
          <li>{{knowledge.title}}</li>
          <li v-for="ability in knowledge.abilities">
            {{ability}}
          </li>
        </ul>
      </div>
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
