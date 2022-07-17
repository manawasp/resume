<script lang="ts" setup>
import * as data from '../locales/en.json'
</script>

<template>
  <Header />
  <div id="content">
    <Introduction
      :resume="data.resume"
    />
    <Knowledge
      :knowledges="data.knowledges"
    />
    <Work
      :works="data.works"
    />
    <Education
      :educations="data.educations"
    />
    <Project
      :projects="data.projects"
    />
    <Language
      :languages="data.languages"
    />
    <Extra
      :interests="data.interests"
    />
  </div>
  <Footer />
</template>
