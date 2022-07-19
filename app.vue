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
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Source Sans Pro', "Helvetica Neue", Helvetica, Arial, 'Noto Sans SC', sans-serif;
  color: #333;
  font-size: 1rem;
}

h1, h3, h4, h5, .knowledges li {
  font-family: 'Source Sans Pro', "Helvetica Neue", Helvetica, Arial, 'Noto Sans SC', sans-serif;
}

.content {
  line-height: 1.5;
}

footer {
  margin-top: 4rem;
  text-align: center;
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

  &.icon {
    fill: #777;
    padding: 9px;
  }
  &.icon:hover {
    fill: #c63156;
  }
}

#app {
  box-sizing: border-box;
  width: 840px;
  padding: 2rem 3.5rem 4rem 3.5rem;
  margin-left: auto;
  margin-right: auto;
}

h1 .sub {
  font-weight: normal;
  font-size: 1.2rem;
  color: #75767a;
}

.text-justify { text-align: justify; }
.text-muted{color:#888;}

.font-small {font-size: 85%;}

.pl-0 { padding-left: 0; }
.mt-0 { margin-top: 0; }
.mb-0 { margin-bottom: 0; }
.mt-xsmall { margin-top: 0.4rem; }
.mt-small { margin-top: 0.8rem; }
.ml-small { margin-left: 0.8rem; }

p.block {
  margin-top: 0;
  margin-bottom: 0;

  &:not(:last-child) { margin-bottom: 1.5rem;}
}
div.block:not(:last-child) { margin-bottom: 2.5rem;}

.knowledges ul {
  padding: 0;
  margin: 0;
}

ul.knowledges li {
  font-size:.975rem;
}

h2 {
  font-size: 1.1rem;
  color: #333;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  border-bottom: 2px solid #333;
  display: inline-block;
}
h2 .space{
  padding: 5px 20px 5px 40px;
}

h3 {
  font-size: 1rem;
  font-weight: normal;

  .info {
    margin-left: .3rem;
  }
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
    line-height:1.9rem;

    &.title {
      font-weight:500;
      border-bottom:0;
      color: #777;
      font-weight: 300;
      padding-bottom: 10px;
    }
  }

  &.no-border li {
    border: 0;
  }
  &.font-sm {
    font-size:.925rem;
  }
}

.experience+.experience {
  margin-top: 36px;
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

// Mobile
@media only screen and (max-width: 500px) {
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(assets/fonts/SourceSansPro-Regular.woff2) format('woff2');
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(assets/fonts/SourceSansPro-SemiBold.woff2) format('woff2');
}
</style>
