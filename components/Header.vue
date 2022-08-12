<script lang="ts" setup>
import LinkedinIcon from 'assets/icons/linkedin.svg'
import GithubIcon from 'assets/icons/github.svg'
import MailIcon from 'assets/icons/mail.svg'
</script>

<template>
  <div class="relative" style="position: relative">
    <h1 id="title">
      <div>
        <span class="main">Clovis Kyndt</span>
      </div>
      <div class="subtitle text-muted">
        Software Developer
      </div>
    </h1>

    <div class="social-menu mt-small">
      <div>
        <a target="_blank" class="icon" href="https://www.linkedin.com/in/cloviskyndt/">
          <LinkedinIcon />
        </a>
        <a target="_blank" class="icon" href="https://github.com/Manawasp/">
          <GithubIcon />
        </a>
        <a target="_blank" class="icon" href="mailto:clovis.kyndt+pro@gmail.com">
          <MailIcon />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
