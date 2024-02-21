<script lang="ts" setup>
useHead({
  title: 'Clovis Kyndt - Resume',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  meta: [
    { name: 'description', content: 'Clovis Kyndt, software developer, resume' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
:root {
  --body-bg: #F6F8FC;
  --app-bg: #fff;
  --h2-border-color: #5a89de;
  --text-color: #0a2540;
  --text-secondary-color: #888;
  --font-family: 'Source Sans Pro', "Helvetica Neue", Helvetica, Arial, 'Noto Sans SC', sans-serif;
  --hover-color: #6574ff;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Source Sans Pro', "Helvetica Neue", Helvetica, Arial, 'Noto Sans SC', sans-serif;
  color: var(--text-color);
  background: var(--body-bg);
  font-size: 17px;
}

h1,
h2,
h3 {
  color: var(--text-color);
  font-weight: bold;
  font-family: 'Source Sans Pro', "Helvetica Neue", Helvetica, Arial, 'Noto Sans SC', sans-serif;
}

h1 {
  margin-top: 0;
}

h2 {
  font-size: 20px;
  margin: 3rem 0 2.5rem;
  border-bottom: 2px solid var(--h2-border-color);
  display: inline-block;
}

h3 {
  font-size: 17px;
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
  margin-top: 2rem;
  text-align: center;
  margin-bottom: 3rem;
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
    color: var(--hover-color);
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
  background: var(--app-bg);
  box-sizing: border-box;
  max-width: 840px;
  padding: 2rem 3.5rem;
  margin: 2rem auto;
}

.text-justify {
  text-align: justify;
}

.text-muted {
  color: var(--text-secondary-color);
}

.font-small {
  font-size: 90%;
}

.ml-xsmall {
  margin-left: 0.3rem;
}

.mt-xsmall {
  margin-top: 0.3rem;
}

.mt-small {
  margin-top: 0.8rem;
}

.ml-small {
  margin-left: 0.8rem;
}

p.block {
  margin-top: 0;
  margin-bottom: 0;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
}

div.block:not(:last-child) {
  margin-bottom: 2.5rem;
}

small,
.small {
  font-size: 90%;
}

.strong {
  font-weight: bold;
}

.clear-margin {
  margin: 0;
}

ul {
  list-style-type: none;
  font-size: .925rem;

  li {
    border-bottom: 1px dashed #ddd;
    padding-right: 0.8rem;
    line-height: 2rem;

    &:first-child {
      color: var(--text-secondary-color);
      border-bottom: 0;
      padding-bottom: 0.8rem;
    }
  }
}

.social-menu {
  text-align: right;
  position: absolute;
  right: 0;
  top: 0;
}

h1 span.main {
  background-image: linear-gradient(to right, #656cc3 0%, #5687cf 40%, #5598d3 75%, #5ea4cd 60%);
  background-clip: text;
  color: transparent;
}

// Table
@media only screen and (max-width: 920px) {
  body {
    background: var(--app-bg)
  }
}

// Mobile
@media only screen and (max-width: 720px) {
  #app {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }

  #title {
    margin-top: 0;
  }

  #title,
  .social-menu {
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
