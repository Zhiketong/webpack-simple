function getInitialState () {
  return {
    demo: {}
  }
}

const state = getInitialState()

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
  UN_REGISTER_MODULE (state) {
    state = Object.assign(state, getInitialState())
  },
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
