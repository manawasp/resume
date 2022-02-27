<template>
  <div id="app" class="lang-menu">
    <Header></Header>
    <div id="content">
      <Introduction />
      <Knowledge />
      <Work />
      <Education />
      <Language />
      <Project />
      <Extra />
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Education from './components/Education.vue'
import Extra from './components/Extra.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Knowledge from './components/Knowledge.vue'
import Language from './components/Language.vue'
import Introduction from './components/Introduction.vue'
import Project from './components/Project.vue'
import Work from './components/Work.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
