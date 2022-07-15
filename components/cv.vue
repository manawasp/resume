<script lang="ts" setup>
import cn from 'locales/cn.json'
import fr from 'locales/fr.json'
import en from 'locales/en.json'

const props = withDefaults(defineProps<Props>(), { locale: 'fr' })

const mapLanguages: { [key: string]: any } = {
  cn,
  fr,
  en,
}

function getLanguage(lang: string): any {
  return mapLanguages[mapLanguages[lang] ? lang : 'en']
}

interface Props {
  locale: string
}

const translation = getLanguage(props.locale)
</script>

<template>
  <Header :locale="props.locale" />
  <div id="content">
    <Introduction
      :locale="props.locale"
      :resume="translation.resume"
    />
    <Knowledge
      :knowledges="translation.knowledges"
    />
    <Work
      :works="translation.works"
    />
    <Education
      :educations="translation.educations"
    />
    <Language
      :languages="translation.languages"
    />
    <Project
      :projects="translation.projects"
    />
    <Extra
      :interests="translation.interests"
    />
  </div>
  <Footer />
</template>
