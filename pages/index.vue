<script lang="ts" setup>
import * as data from '../locales/en.json'
</script>

<template>
  <main>
    <div v-for="(el, idx) in data.default.resume" :key="idx" :class="`el-${el.type} ${el.class || ''}`">
      <h2>{{ el.title }}</h2>
      <Text v-if="el.type === 'text'" :value="el.value" />
      <Table v-if="el.type === 'table'" :value="el.value" />
      <Block v-if="el.type === 'block'" :value="el.value" />
    </div>
  </main>
</template>

<style lang="scss">
.el-table+div>h2 {
  margin-top: .6rem;
}
</style>
