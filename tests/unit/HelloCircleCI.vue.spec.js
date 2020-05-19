import { shallowMount, mount } from '@vue/test-utils'
import HelloCircleCI from '@/components/HelloCircleCI.vue'

describe('HelloCircleCI.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloCircleCI, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders greeting when click here button clicked', async () => {
    const msg = 'new message'
    const expected_greeting = 'Hello, circleci'
    const wrapper = mount(HelloCircleCI, {
      propsData: { msg }
    })

    let input_text = 'circleci'
    wrapper.find("input").setValue(input_text)

    wrapper.find("button").trigger('click')
    await wrapper.vm.$nextTick();

    expect(wrapper.find("p").text()).toBe(expected_greeting)
    //expect(wrapper.vm.greeting).toMatch(expected_greeting)
  })
})
