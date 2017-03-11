<template>
  <div>
    <h3><span>{{$t('titleKnowledges')}}</span></h3>
    <div style="margin-right:50px;display:block" class="margin-top-5 margin-bottom-20">

      <div v-for="knowledge in $t('knowledges')" class="knowledges">
        <ul style="padding:0">
          <div style="margin:20px 30px 20px 0">
            <li class="title">{{knowledge.title}}</li>
            <li v-for="ability in knowledge.abilities">
              {{ability}}
            </li>
          </div>
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
