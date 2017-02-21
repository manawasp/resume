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
import Education from './components/Education'
import Extra from './components/Extra'
import Knowledge from './components/Knowledge'
import Language from './components/Language'
import Presentation from './components/Presentation'
import Project from './components/Project'
import Work from './components/Work'

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
