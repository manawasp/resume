<script lang="ts" setup>
import LinkedinIcon from 'assets/icons/linkedin.svg'
import GithubIcon from 'assets/icons/github.svg'
import MailIcon from 'assets/icons/mail.svg'

interface Props {
  resume: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <div class="relative" style="position: relative">
      <h1 id="title">
        <div>
          Clovis Kyndt
        </div>
        <div class="sub">
          Software Developer
        </div>
      </h1>

      <div class="mt-small" style="position:absolute;right:0;top:0px;text-align: right;">
        <div>
          <a
            target="_blank"
            class="icon"
            href="https://www.linkedin.com/in/cloviskyndt/"
          >
            <LinkedinIcon />
          </a>
          <a
            target="_blank"
            class="icon"
            href="https://github.com/Manawasp/"
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            class="icon"
            href="mailto:clovis.kyndt+pro@gmail.com"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </div>
    <h2><span>About</span></h2>
    <div class="text-justify">
      <p class="block" v-html="props.resume.short" />
      <p class="block" v-html="props.resume.detail" />
    </div>
  </div>
</template>

<style lang="scss">
// Tablet
@media only screen and (max-width: 1175px) {
  #social {
    position: relative;
    text-align: left;
    top:0;
    margin-top:0;
  }
}

// Mobile
@media only screen and (max-width: 500px) {
  #social, #title { text-align: center; }
}
</style>
