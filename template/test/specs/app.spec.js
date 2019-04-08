import VueResource from 'vue-resource'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App'

const localVue = createLocalVue()
localVue.use(VueResource)

describe('App.vue', () => {
  let wrapper = null
  
  beforeEach(() => {
    wrapper = shallowMount(App, {
      localVue
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('应该正确显示msg', () => {
    expect(wrapper.vm.msg).to.equal('Welcome to Your Vue.js App')
  })
})
