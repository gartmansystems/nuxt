import Vue from 'vue'
import Vuetify from 'vuetify'

console.debug('Setting Vuetity Theme', process.env.theme)
Vue.use(Vuetify, {
  theme: process.env.theme
})