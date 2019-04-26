const state = {
  demo: {
  }
}

const actions = {
  testjava ({dispatch, commit}) {
    /* dispatch('javaApi', {
      method: 'post',
      url: 'url',
      params: {}
    }, {root: true})
    .then((data) => {
    }) */
    commit('DEMO', 'value')
  }
}

const mutations = {
  DEMO (state, data) {
    state.demo = data
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
