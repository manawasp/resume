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
:root {
  --text-color: #333;
  --text-secondary-color: #888;
  --font-family: 'Source Sans Pro', "Helvetica Neue", Helvetica, Arial, 'Noto Sans SC', sans-serif;
  --hover-color: #c63156;
  --hover-gradient-1: #b12952;
  --hover-gradient-2: #c63156;
  --hover-gradient-3: #da385b;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Source Sans Pro', "Helvetica Neue", Helvetica, Arial, 'Noto Sans SC', sans-serif;
  color: var(--text-color);
  font-size: 1rem;
}

h1, h2, h3 {
  color: var(--text-color);
  font-weight: bold;
  font-family: 'Source Sans Pro', "Helvetica Neue", Helvetica, Arial, 'Noto Sans SC', sans-serif;
}

h2 {
  font-size: 1.1rem;
  margin: 3rem 0 2.5rem;
  border-bottom: 2px solid var(--text-color);
  display: inline-block;
}

h3 {
  font-size: 1rem;
  font-weight: normal;
}

.subtitle {
  font-weight: normal;
  font-size: 1.2rem;
}

.content {
  line-height: 1.5;
}

footer {
  margin-top: 4rem;
  text-align: center;
}

a {
  color: var(--text-color);
  text-decoration: none;

  &:not(.icon) {
    border-bottom: 1px dashed rgba(0, 0, 0, 0.333);
  }

  &:hover {
    transition: all .3s;
    background-clip: text;
    background-image: linear-gradient(to right, var(--hover-gradient-1) 0%, var(--hover-gradient-2) 55%, var(--hover-gradient-3) 90%);
    color: transparent;
  }

  &.icon {
    fill: var(--text-secondary-color);
    padding: 9px;
  }
  &.icon:hover {
    fill: var(--hover-color);
  }
}

#app {
  box-sizing: border-box;
  max-width: 840px;
  padding: 2rem 3.5rem 4rem 3.5rem;
  margin: 0 auto;
}

.text-justify { text-align: justify; }
.text-muted{color: var(--text-secondary-color);}

.font-small {font-size: 85%;}

.ml-xsmall { margin-left: 0.3rem; }
.mt-xsmall { margin-top: 0.3rem; }
.mt-small { margin-top: 0.8rem; }
.ml-small { margin-left: 0.8rem; }

p.block {
  margin-top: 0;
  margin-bottom: 0;

  &:not(:last-child) { margin-bottom: 1.5rem;}
}
div.block:not(:last-child) { margin-bottom: 2.5rem;}

small, .small { font-size: 85%; }
.strong { font-weight: bold; }
.clear-margin { margin: 0; }

ul {
  list-style-type: none;
  font-size:.925rem;

  li {
    border-bottom: 1px dashed #ddd;
    padding-right: 0.8rem;
    line-height: 2rem;

    &:first-child {
      color: var(--text-secondary-color);
      border-bottom:0;
      padding-bottom: 0.8rem;
    }
  }
}

#footer {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  color: var(--text-secondary-color);
  text-align:center;
}

.social-menu {
  text-align: right;
  position: absolute;
  right: 0;
  top: 0;
}

// Mobile
@media only screen and (max-width: 720px) {
  #app {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }

  #title {
    margin-top: 0;
  }

  #title, .social-menu {
    text-align: center;
  }

  .social-menu {
    position: initial;
  }
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
