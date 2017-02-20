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
    <education></education>
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

export default {
  name: 'app',
  components: {
    Education
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
