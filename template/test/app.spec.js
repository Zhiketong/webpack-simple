import { mount } from '@vue/test-utils'
import App from '../src/main'

describe('app', function() {
  const wrapper = mount(App)
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('has text app', () => {
    expect(wrapper.text()).toBe('app')
  })
})
