// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'

Vue.use(VueI18n)

// ready translated locales
var locales = {
  en: {
    knowledges: [
      {
        title: 'Languages',
        abilities: [
          'C/C++',
          'Golang',
          'Python',
          'Javascript'
        ]
      },
      {
        title: 'Framework',
        abilities: [
          'Ruby on Rails',
          'AngularJS',
          'Node.js',
          'CodeIgniter'
        ]
      },
      {
        title: 'Database',
        abilities: [
          'MongoDB',
          'MySQL',
          'Redis',
          'PostgreSQL'
        ]
      },
      {
        title: 'Distributed sys.',
        abilities: [
          'Microservce',
          'ELK stack',
          'Kafka',
          'RabbitMQ'
        ]
      },
      {
        title: 'Tools / Methods',
        abilities: [
          'Git',
          'Docker',
          'TDD',
          'Agile Dev'
        ]
      },
      {
        title: 'Extra',
        abilities: [
          'Algorithms',
          'Design Patterns',
          'Mathematics',
          'Procedural Prog.'
        ]
      }
    ],
    works: [
      {
        job: 'Backend developer ruby on rails',
        company: 'Libertrip',
        type: 'Internship',
        date: 'april 2014 - august 2015',
        localization: 'in Euratechnologie, Lille, France',
        description: 'During my first month in Libertrip I integrated new features in the main application in Rails / Backbone.<br />After this month I spent my time building an API in Rails to query the application. To create it I had to incorporate several other API from channel manager together.<br />I then built a web client to read and handle the data.',
        tags: [
          'Ruby on rails',
          'Backbone',
          'AngularJS',
          'PostgreSQL',
          'MongoDB'
        ]
      },
      {
        job: 'Web Developer',
        company: 'Freelance',
        type: '',
        date: 'july 2012 - december 2012',
        localization: 'in Edinburgh, Scotland, United Kingdom',
        description: '',
        tags: [
          'Ruby on Rails',
          'JQuery',
          'MySQL'
        ]
      }
    ],
    educations: [
      {
        name: 'Beijing Jiaotong University',
        date: '2014 - 2015',
        localization: 'Beijing, Beijing Municipality, China',
        courses: [
          'Project Management',
          'Quality and Process Software Management',
          'BigData (Hadoop)',
          'Software training (Node.js & AngularJS)',
          'Chinese writting and oral'
        ]
      },
      {
        name: 'Epitech - European Institute of Technology',
        date: '2011 - 2016',
        localization: 'Paris, France',
        courses: [
          'Group projects'
        ]
      }
    ]
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

// set lang
Vue.config.lang = 'en'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
