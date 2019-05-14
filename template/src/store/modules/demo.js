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
    })
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
  state,
  actions,
  mutations,
  getters
}
