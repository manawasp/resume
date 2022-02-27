<script lang="ts" setup>
</script>

<template>
  <div>
    <h3><span>{{$t('titleKnowledges')}}</span></h3>
    <div style="display:block" class="margin-top-5 margin-bottom-20">

      <div
        v-for="(knowledge, key) in $t('knowledges')"
        v-bind:key="key"
        class="knowledges"
      >
        <ul style="padding:0">
          <div style="margin:20px 30px 20px 0">
            <li class="title">{{knowledge.title}}</li>
            <li
              v-for="(ability, key) in knowledge.abilities"
              v-bind:key="key"
            >
              {{ability}}
            </li>
          </div>
        </ul>
      </div>

    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
