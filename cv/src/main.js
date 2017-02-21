// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'

Vue.use(VueI18n)

// ready translated locales
var locales = {
  en: {
    titleKnowledges: 'Computer Knowledges',
    titleWorks: 'Work Experience',
    titleEducations: 'Education',
    titleLanguages: 'Languages',
    titleProjects: 'Personal Work',
    titleInterests: 'Interest',
    presentation: {
      quick: 'I am a young French software engineer that loves programming and mathematics.',
      computer: 'I  started learning programming when I was in high school with JavaScript, then C and C++ during college, and now I focus on Backend technologies (NodeJs, RoR, Python & Golang). I am very interested in distributed systems and big data.<br />I spend a lot of time improving myself by working on side projects, reading CS blogs, website, and books. I like challenges and solving complex problems.<br />I am currently working on a microservices architecture that will be easy to scale.',
      interest: 'I lived 6 months in Edinburgh to improve my English and I studied 1 year in China. I like traveling and I would like to visit South Korea and Japan.<br />I am interested in the digital art and photography.'
    },
    knowledges: [
      {
        title: 'Languages',
        abilities: ['C/C++', 'Golang', 'Python', 'Javascript']
      }, {
        title: 'Framework',
        abilities: ['Ruby on Rails', 'AngularJS', 'Node.js', 'CodeIgniter']
      }, {
        title: 'Database',
        abilities: ['MongoDB', 'MySQL', 'Redis', 'PostgreSQL']
      }, {
        title: 'Distributed sys.',
        abilities: ['Microservce', 'ELK stack', 'Kafka', 'RabbitMQ']
      }, {
        title: 'Tools / Methods',
        abilities: ['Git', 'Docker', 'TDD', 'Agile Dev']
      }, {
        title: 'Extra',
        abilities: ['Algorithms', 'Design Patterns', 'Mathematics', 'Procedural Prog.']
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
        tags: ['Ruby on rails', 'Backbone', 'AngularJS', 'PostgreSQL', 'MongoDB']
      }, {
        job: 'Web Developer',
        company: 'Freelance',
        type: '',
        date: 'july 2012 - december 2012',
        localization: 'in Edinburgh, Scotland, United Kingdom',
        description: '',
        tags: ['Ruby on Rails', 'JQuery', 'MySQL']
      }
    ],
    educations: [
      {
        name: 'Beijing Jiaotong University',
        date: '2014 - 2015',
        localization: 'Beijing, Beijing Municipality, China',
        courses: ['Project Management', 'Quality and Process Software Management', 'BigData (Hadoop)', 'Software training (Node.js & AngularJS)', 'Chinese writting and oral']
      }, {
        name: 'Epitech - European Institute of Technology',
        date: '2011 - 2016',
        localization: 'Paris, France',
        courses: ['Group projects']
      }
    ],
    languages: [
      {
        lang: 'English',
        level: 'Intermediate',
        comment: 'Lived 6 months in Edinburgh'
      }, {
        lang: 'French',
        level: 'Native Language',
        comment: ''
      }, {
        lang: 'Chinese',
        level: 'Basic',
        comment: 'Lived 1 year in Beijing'
      }
    ],
    projects: [
      {
        title: 'Noihara',
        subtitle: 'Tools to plan and manage projects schedules',
        describe: 'Noihara is a web application to help you manage your projects in a team. It will have the most user friendly interface possible, the ability to manage diagrams like Pert and Gantt, schedules, chats, etc.<br />The project was born after having tested Asana, Basecamp and other tools to manage the Citywarfare project. This project allows me to test and improve my knowledge about various technologies.',
        tags: [
          'Microservice',
          'Golang',
          'Redis',
          'MongoDB',
          'Kafka',
          'Elasticsearch - ELK',
          'Docker'
        ]
      }, {
        title: 'Citywarfare',
        subtitle: 'Mobile game with reality augmented',
        describe: 'Citywarfare is a multiplayer war game in augmented reality created during our curriculum at Epitech. It will have mobile applications and a web interface. The user will be able to play in a world game and in custom games with different game modes available. We are 7 in the Citywarfare team.<br />I supervise the backend architecture and build the API and its design.',
        tags: [
          'Ruby on Rails',
          'CodeIgniter',
          'API',
          'MongoDB',
          'Backend Architecture',
          'UX - Design'
        ]
      }, {
        title: 'Hexatyla',
        subtitle: 'Computer game RTS',
        describe: 'Resume Hexatyla was a project built in a mandatory 3-months time during our undergraduate year at Epitech. We were 5 in the team to work on this project.<br />The project was a real challenge and we chose to only use a low-level rendering engine to build the core of the project. It has 3 parts, a server, a client application, and a web application. The web application allows to manage the race, map, and tech. tree to help having a modular game.<br />We have been strongly congratulated about the work we put on eventhough we could not finish it in the set time constraint.',
        tags: [
          'C++',
          'Mathematics',
          'Algorithms',
          'Ogre3D',
          'Javascript',
          'Team Leader'
        ]
      }
    ],
    interests: [
      {
        meta: 'heartbeat',
        names: ['Running, Swimming, Fitness']
      }, {
        meta: 'heart',
        names: [
          'Traveling',
          'Movies, Series',
          'Digital Art, Photography'
        ]
      }, {
        meta: 'book',
        names: [
          'Machine Learning: The Art and Science of Algorithms that Make Sense of Data',
          'Essential Algorithms: A Practical Approach to Computer Algorithms',
          'Design Patterns: Elements of Reusable Object-Oriented',
          'MongoDB Applied Design Patterns',
          'Go Programming Blueprints',
          'Building Microservices',
          'Seven Databases in Seven Weeks: A Guide to Modern Databases and the NoSQL Movement',
          'Lean Startup',
          'The Art of War'
        ]
      }, {
        meta: 'thumbs-up',
        names: ['Food, Beer']
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
  components: {
    App
  }
})
