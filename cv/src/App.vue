<template>
  <div id="app">
    <div>
      <a href="mailto:clovis.kyndt@gmail.com" target="_blank">
        clovis.kyndt@gmail.com
      </a>
      <a href="/fr">Français</a>
      <a href="/"> English</a>
      <a href="/cn"> 中文</a>
    </div>
    <presentation></presentation>
    <knowledge></knowledge>
    <work></work>
    <education></education>
    <language></language>
    <project></project>
    <extra></extra>
    <div>
      <a href="mailto:clovis.kyndt@gmail.com" target="_blank">
        clovis.kyndt@gmail.com
      </a>
      <br />
      <span>
        Design by Clovis Kyndt
      </span>
    </div>
  </div>
</template>

<script>
import Education from './sections/Education'
import Extra from './sections/Extra'
import Knowledge from './sections/Knowledge'
import Language from './sections/Language'
import Presentation from './sections/Presentation'
import Project from './sections/Project'
import Work from './sections/Work'

export default {
  name: 'app',
  components: {
    Education,
    Extra,
    Knowledge,
    Language,
    Presentation,
    Project,
    Work
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
