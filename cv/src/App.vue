<template>
  <div id="app" class="white-bg overlay-margin-500 text-right font-medium padding-top-10 lang-menu">
    <div class="padding-left-50 padding-right-50">
      <a href="mailto:clovis.kyndt@gmail.com" target="_blank">
        <i class="fa fa-share fa-1x margin-right-5"></i>
        clovis.kyndt@gmail.com
      </a>
      <div class="pull-right">
        <a class="margin-right" href="/fr">Français</a>
        <a class="margin-right" href="/"> English</a>
        <a class="margin-right" href="/cn"> 中文</a>
      </div>
    </div>

    <div class="padding-left-50">
      <div class="pull-right">
        <a target="_blank" class="social googleplus">
          <i class="fa fa-google-plus fa-lg"></i>
        </a>
        <a target="_blank" class="social linkedin">
          <i class="fa fa-linkedin fa-lg"></i>
        </a>
        <a target="_blank" class="social github">
          <i class="fa fa-github-alt fa-lg"></i>
        </a>
        <a target="_blank" class="social download">
          <i class="fa fa-download fa-lg"></i>
          <span class="download-content">Download</a>
        </a>
      </div>

      <h1>
        <div class="letter-spacing-0-3" style="font-size:2.95rem;font-weight:normal">CLOVIS KYNDT</div>
        <div class="font-large grey-8 letter-spacing-0-6" style="font-size:1.3rem;font-weight:normal">SOFTWARE DEVELOPER</div>
      </h1>
    </div>

    <presentation class="padding-left-50"></presentation>
    <knowledge class="padding-left-50"></knowledge>
    <work class="padding-left-50"></work>
    <education class="padding-left-50"></education>
    <language class="padding-left-50"></language>
    <project class="padding-left-50"></project>
    <extra class="padding-left-50"></extra>
    <div id="footer">
      <a href="mailto:clovis.kyndt@gmail.com" target="_blank">
        clovis.kyndt@gmail.com
      </a>
      <br />
      <span class="font-small">
        Design by Clovis Kyndt
      </span>
    </div>
  </div>
</template>

<script>

import Education from './sections/Education'
import Extra from './sections/Extra'
import Knowledge from './sections/Knowledge'
import Language from './sections/Language'
import Presentation from './sections/Presentation'
import Project from './sections/Project'
import Work from './sections/Work'

export default {
  name: 'app',
  components: {
    Education,
    Extra,
    Knowledge,
    Language,
    Presentation,
    Project,
    Work
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Sorts Mill Goudy";
  src: url(./assets/fonts/SortsMillGoudy-Regular.ttf);
}
.font-small {font-size:0.7em}
.font-medium {font-size:0.9rem;}
.font-large {font-size:1.3rem;}

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
.padding-top-10 {padding-top:10px}
.padding-bottom-30 {padding-bottom:30px}
.padding-right-50 {padding-right:50px}
.padding-left-50 {padding-left:50px}

body {
  height: 100%;
  width: 100%;
  background: url('./assets/img/background.jpg') left 50% no-repeat #f6f3ea fixed;
  overflow-x: hidden;
  font-size: 1rem;
}

h1, h3, h4, h5, .knowledges li {
  font-family: "Sorts Mill Goudy", "Helvetica";
}

a.social {
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  margin-right:20px;
  -webkit-border-radius: 0.9rem;
  -moz-border-radius: 0.9rem;
  border-radius: 0.9rem;
  background-color:#ddd;
  color:#444;
  text-align:center;
  font-size:0.7rem;
  line-height:1.8rem;
  transition: background 0.3s, color 0.3s  linear; /* vendorless fallback */
  -o-transition: background 0.3s, color 0.3s linear; /* opera */
  -ms-transition: background 0.3s, color 0.3s linear; /* IE 10 */
  -moz-transition: background 0.3s, color 0.3s linear; /* Firefox */
  -webkit-transition: background 0.3s, color 0.3s linear; /*safari and chrome */
}
a.social.little {
  width: 26px;
  height: 26px;
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  border-radius:13px;
}
a.social i {
  vertical-align:middle;
}
a.social.linkedin:hover {
  background-color:#125675;
}
a.social.linkedin {
  background-color:#006699;
  color:white;
}
a.social.github:hover {
  background-color:#171515;
}
a.social.github {
  background-color:#171515;
  color:white;
}
a.social.googleplus:hover {
  background-color:#c13929;
}
a.social.googleplus {
  background-color:#DD4B39;
  color:white;
}

#social {
  text-align:right;
  margin-top:40px;
}
ul.knowledges li {
  font-size:1rem;
}
@media only screen and (max-width: 64em) {
  #social {
    text-align:left;
    margin-top:10px;
  }
}

h3 {
  text-transform: uppercase;
  font-size:1.3rem;
  line-height: 1.6rem;
  background-color:#F4F4F4;
  display:inline-block;
  padding:8px 20px 5px 55px;
  min-width:400px;
  color:#555;
  font-weight: normal;
  margin-left: -50px;
}

h4 {
  font-size:1.4rem;
  color: #333;
  font-weight: normal;
  margin-bottom:0;
}

.label {
  margin-right:6px;
  font-size: 0.8rem;
}

.label.label-primary {
  background-color: #f5f5f5;
  color: #444;
  padding: 3px 6px;
  border-radius: 3px;
  margin-right:15px;
}

ul {
  list-style-type: none;
}

ul li {
  border-bottom:1px dashed #ddd;
  padding-left:10px;
  padding-right:10px;
  font-size:1rem;
  line-height:1.9rem;

  &.title {
    font-weight:500;
    border-bottom:0;
    color: #999;
    font-weight: 300;
    font-family:'Merriweather', sans-serif;
    padding-bottom: 10px;
  }
}

.lang-menu a {
  color: #aaa;
  &:hover {
    color: #444;
  }
  &.select {
    color:#444;
    border-bottom:1px solid #ddd;
  }
}

.experience, .education, .project {
  border-bottom: 1px dashed #ddd;
  padding-bottom: 25px;
  padding-left:5px;
  max-width:800px;
}

.experience > h4 {
  font-family: 'Lara';
}

#footer {
  padding-top: 30px;
  padding-bottom: 30px;
  color: #888;
  text-align:center;
}

#app {
  position: relative;
  left: 33.33333%;
  width: 66.66666%;
}

.knowledges {
  width: 33%;
  display:inline-block;
}
</style>
