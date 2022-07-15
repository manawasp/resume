<script lang="ts" setup>
useHead({
  title: 'Clovis Kyndt',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Résumé of me, Clovis Kyndt, software developer' },
  ],
})
</script>

<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  font-size: 1rem;
  font-family: 'Merriweather', 'Times New Roman', serif;
  font-weight: 300;
}
a {text-decoration: none;}
#app {
  padding-top:15px;
  background-color: #ffffff;
  font-size:0.9rem;
}
.no-underline{text-decoration: none;}
.paper-limit{max-width:825px;padding-right:30px;text-align:justify}
.grey-5{color:#555;}
.grey-6{color:#666;}
.grey-8{color:#888;}

.letter-spacing-0-6 {letter-spacing:0.6rem;}
.letter-spacing-0-3 {letter-spacing:0.3rem;}
.description-txt{
  color: #000;
  word-spacing: 2px;
  font-weight: 300;
  font-size: 1rem;
}

.font-small {font-size:0.7em}
.font-large {font-size:1.3rem;}
.font-0-9{font-size:0.9rem;}
.font-0-95{font-size:0.95rem;}
.font-0-7{font-size:0.7rem;}

.margin-top-5 {margin-top:5px}
.margin-top-10 {margin-top:10px}
.margin-top-20 {margin-top:20px}
.margin-top-40 {margin-top:40px}
.margin-bottom-10 {margin-bottom:10px}
.margin-bottom-20 {margin-bottom:20px}
.margin-bottom-30 {margin-bottom:30px}
.margin-bottom-40 {margin-bottom:40px}
.margin-right-5 {margin-right:5px}
.margin-right-10 {margin-right:10px}
.margin-left-5 {margin-left:5px}

.padding-top-5 {padding-top:0px}
.padding-top-5 {padding-top:5px}
.padding-bottom-30 {padding-bottom:30px}
.padding-right-50 {padding-right:50px}
.padding-left-50 {padding-left:50px}

body {
  height: 100%;
  width: 100%;
  background: url('./assets/img/background.webp') left 50% no-repeat #f6f3ea fixed;
  overflow-x: hidden;
  font-size: 1rem;
}

h1, h3, h4, h5, .knowledges li {
  font-family: 'Sorts Mill Goudy', 'Helvetica', 'Times New Roman';
}

ul.knowledges li {
  font-size:1rem;
}

h3 {
  text-transform: uppercase;
  font-size:1.3rem;
  line-height: 1.6rem;
  background-color:#EFEEEB;
  display:inline-block;
  color:#555;
  font-weight: normal;
  max-width:400px;
  width:100%;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}
h3 > span {
  padding:10px 20px 3px 15px;
  display: inline-block;
}
h3 .space{
  padding: 5px 20px 5px 40px;
}

h4 {
  font-size:1.4rem;
  color: #333;
  font-weight: normal;
  margin-bottom:0;
}
h6 {
  font-size: 0.82rem;
  color: #777;
  margin: 1px 0 0 0;
  font-weight: 300;
}

.label {
  display: none;
  margin-right: 6px;
  font-size: 0.8rem;
}

.label.label-primary {
  display: inline-block;
  background-color: #EFEEEB;
  color: #444;
  padding: 3px 6px;
  border-radius: 3px;
  margin-right:15px;
}

ul {
  list-style-type: none;
  li {
    border-bottom:1px dashed #ddd;
    padding-left:10px;
    padding-right:10px;
    font-size:1rem;
    line-height:1.9rem;

    &.title {
      font-weight:500;
      border-bottom:0;
      color: #777;
      font-weight: 300;
      font-family:'Merriweather', sans-serif;
      padding-bottom: 10px;
    }
  }
}

#content {
  padding-left: 50px;
  padding-right: 50px;
}

a {
  color: #aaa;
  &:hover {
    color: #444;
  }
  &.select {
    color:#444;
    border-bottom:1px solid #ddd;
  }
}

.experience, .education, .project {
  border-bottom: 1px dashed #ddd;
  padding-bottom: 36px;
  padding-right: 6px;
  padding-left: 6px;
  max-width:800px;
}

.experience > h4 {
  font-family: 'Lara';
}

#footer {
  padding-top: 30px;
  padding-bottom: 30px;
  color: #888;
  text-align:center;
}

#app {
  position: relative;
  left: 33.33333%;
  width: 66.66666%;
}

.knowledges {
  width: 33%;
  display:inline-block;
}

// tablet
@media only screen and (max-width: 800px) {
  #app {
    left:0;
    width:100%;
    margin-top:100px;
  }
  .knowledges {
    width: 50%;
  }
  body {
    background-position: left -200px;
  }
}

#lang > a {
  margin-left: 5px;
  margin-right: 5px;
}

// Mobile
@media only screen and (max-width: 500px) {
  #app > div {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
  .hidden-mobile {
    display: none;
  }
  .knowledges {
    width: 100%;
  }
  #lang {
    float: none;
    text-align: center;
  }
}
</style>
