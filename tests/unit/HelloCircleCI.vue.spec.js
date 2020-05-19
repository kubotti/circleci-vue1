import { shallowMount } from '@vue/test-utils'
import HelloCircleCI from '@/components/HelloCircleCI.vue'

describe('HelloCircleCI.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloCircleCI, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
  it('renders greeting when click here button clicked', () => {
    const msg = 'new message'
    const expected_greeting = 'Hello, circleci'
    const wrapper = shallowMount(HelloCircleCI, {
      propsData: { msg }
    })
    // wrapper.find("#username").setValue('circleci')

    // expect(wrapper.find("#username").instance().value).toMatch("circleci1")

    let b1 = wrapper.find("button")
    expect(b1.text()).toMatch("Click here")
    //b1.trigger('click')
    wrapper.find("button").trigger('click')
    expect(wrapper.find("p").text()).toMatch(expected_greeting)
  })
})
