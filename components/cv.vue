<script lang="ts" setup>
import cn from '../languages/cn.yaml'
import fr from '../languages/fr.yaml'
import en from '../languages/en.yaml'

const mapLanguages: { [key: string]: any }= {
  'cn': cn,
  'fr': fr,
  'en': en
}

function getLanguage(lang: string): any {
  return mapLanguages[mapLanguages[lang] ? lang : 'en']
}

interface Props {
  locale: string;
}

const props = withDefaults(defineProps<Props>(), { locale: "fr" });
const translation = getLanguage(props.locale)
</script>

<template>
  <Header :locale="props.locale"></Header>
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
  <Footer></Footer>
</template>
