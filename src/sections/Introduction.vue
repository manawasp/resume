<template>
  <div>
    <div class="relative">
      <h1 id="title">
        <div class="letter-spacing-0-3" style="font-size:2.95rem;font-weight:normal">CLOVIS KYNDT</div>
        <div class="font-large grey-8 letter-spacing-0-6" style="font-size:1.3rem;font-weight:normal">SOFTWARE DEVELOPER</div>
      </h1>

      <div id="social">
        <a target="_blank" class="social linkedin" href="https://www.linkedin.com/in/cloviskyndt">
          <i class="fa fa-linkedin fa-lg" />
        </a>
        <a target="_blank" class="social github" href="https://github.com/Manawasp">
          <i class="fa fa-github-alt fa-lg" />
        </a>
        <a target="_blank" class="social download">
          <i class="fa fa-file-pdf fa-lg" />
        </a>
      </div>
    </div>
    <div class="paper-limit description-txt margin-top-40">
      <p v-html="$t('introduction.intro')" class="margin-bottom-30"></p>
      <p v-html="$t('introduction.detail')" class="margin-bottom-30"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introduction'
}
</script>

<style lang="scss">
#social {
  text-align:right;
  margin-top:40px;
  margin-right: 15px;
  position: absolute;
  top: 20px;
  right:0;
}

a.social {
  overflow: hidden;
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  line-height:1.8rem;
  cursor: pointer;
  border-radius: 50%;
  background-color:#ddd;
  color:#444;
  text-align:center;
  font-size:0.7rem;
  border: 3px solid white;
  transition: background 0.3s, color 0.3s, border-color 0.3s linear;
  margin-left: 6px;
  margin-right: 6px;

  &.little {
    width: 26px;
    height: 26px;
    border-radius:13px;
  }

  i {
    vertical-align:middle;
  }

  &.linkedin {
    background-color:#006699;
    color:white !important;
    &:hover { border-color:#a0c6ff; }
  }

  &.github {
    background-color:#171515;
    color:white !important;

    &:hover { border-color:#ccc; }
  }

  &.download {
    background-color:#E11218;
    color:white !important;
    &:hover { border-color:#ecb19f; }
  }
}

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
