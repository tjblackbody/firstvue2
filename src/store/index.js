import Vue from 'vue'
import Vuex from 'vuex'
import Showlogin from './Showlogin/index.js'
import loginstatus from './loginstatus/index.js'
import isshowPromt from './isshowPromt/index.js'
import Userinfo from './Userinfo/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Showlogin, loginstatus, isshowPromt, Userinfo
  }
})
