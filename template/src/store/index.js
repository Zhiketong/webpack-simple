import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})

export default Store
