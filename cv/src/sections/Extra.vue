<template>
  <div>
    <h3>{{$t('titleInterests')}}</h3>
    <ul style="padding:0 40px 0 0">
      <template v-for="categorie in $t('interests')">
        <li v-for="name in categorie.names">
          <i class="fa margin-right-10 grey-5" :class="'fa-' + categorie.meta"></i>
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
