import { shallowMount, createLocalVue } from '@vue/test-utils'
import Demo from '@/components/Demo'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Demo.vue', function() {
  let store
  let state
  let actions
  let mutations

  beforeEach(() => {
    actions = {
      fetchApi: jest.fn()
    }
    mutations = {
      UPDATE: jest.fn()
    }
    state = {
      demo: {}
    }
    store = new Vuex.Store({
      state,
      actions,
      mutations
    })
  })

  it('is a Vue instance', () => {
    const wrapper = mount(Demo, { store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has text app', () => {
    const wrapper = mount(Demo, { store, localVue })
    expect(wrapper.find('span').text()).toBe('app')
  })

  it('calls store action "fetchApi" when button is clicked', () => {
    const wrapper = mount(Demo, { store, localVue })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(actions.fetchApi).toHaveBeenCalled()
  })

  it('calls store mutations "UPDATE" when in created', () => {
    const wrapper = mount(Demo, { store, localVue })
    expect(mutations.UPDATE).toHaveBeenCalled()
  })
})
