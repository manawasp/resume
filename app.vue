<script lang="ts" setup>
useHead({
  title: 'Clovis Kyndt - Résumé',
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
  font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, 'Noto Sans SC', sans-serif;
  color: #333;
  font-size: 1rem;
}

a {
  color: #333;
  text-decoration: none;

  &:not(.icon) {
    border-bottom: 1px dashed #0005;
  }

  &:hover {
    transition: all .3s;
    background-clip: text;
    background-image: linear-gradient(to right, #b12952 0%, #c63156 55%, #da385b 90%);
    color: transparent;
  }
}

#app {
  box-sizing: border-box;
  width: 1120px;
  padding: 2em 3.5em;
  margin-left: auto;
  margin-right: auto;
}

h1 .sub {
  font-weight: normal;
  font-size: 1.2rem;
  color: #75767a;
}

.no-underline{text-decoration: none;}
.paper-limit{max-width:825px;padding-right:30px;text-align:justify}
.grey-5{color:#555;}
.grey-6{color:#666;}
.text-muted{color:#888;}

.letter-spacing-0-6 {letter-spacing:0.6rem;}
.letter-spacing-0-3 {letter-spacing:0.3rem;}
.description-txt{
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

.mt-0 {
  margin-top: 0;
}
.mt-small {
  margin-top: 0.8rem;
}
.ml-small {
  margin-left: 0.8rem;
}

h1, h3, h4, h5, .knowledges li {
  font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, 'Noto Sans SC', sans-serif;
}

ul.knowledges li {
  font-size:.875rem;
}

h3 {
  font-size:1.1rem;
  color: #333;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #333;
  // -webkit-background-clip: text;
  // background-clip: text;
  // background-image: linear-gradient(to right, rgb(39, 77, 150) 0%, #3153c6 15%, #abb7e0 60%);
  // color: transparent;
  display: inline-block;
}
h3 .space{
  padding: 5px 20px 5px 40px;
}

h4 {
  font-size:1rem;
  color: #333;
  font-weight: 700;
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
  border: 1px solid #ddd;
  padding: 2px 6px;
  border-radius: 3px;
  margin-right:15px;
  cursor: default;
}

.clear-margin {
  margin: 0;
}

small, .small {
    font-size: 85%;
}

ul {
  list-style-type: none;
  li {
    border-bottom:1px dashed #ddd;
    padding-right:10px;
    font-size:.875rem;
    line-height:1.9rem;

    &.title {
      font-weight:500;
      border-bottom:0;
      color: #777;
      font-weight: 300;
      padding-bottom: 10px;
    }
  }
}

#content {
  padding-left: 50px;
  padding-right: 50px;
}

.experience, .education, .project {
  padding-bottom: 36px;
  padding: .8rem .1rem;
  max-width:800px;
}

#footer {
  padding-top: 30px;
  padding-bottom: 30px;
  color: #888;
  text-align:center;
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

@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(assets/fonts/NunitoSans-Regular.woff2) format('woff2');
}

@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(assets/fonts/NunitoSans-Bold.woff2) format('woff2');
}
</style>
