<template>
  <div>
    <h3>{{$t('titleInterests')}}</h3>
    <ul>
      <template v-for="categorie in $t('interests')">
        <li v-for="name in categorie.names">
          {{name}}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'extra'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
