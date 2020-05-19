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
    //console.log(wrapper.find("input").html())
    //expect(wrapper.find("#username").text()).toMatch("circleci1")
    expect(wrapper.vm.username).toMatch(input_text)

    let b1 = wrapper.find("button")
    expect(b1.text()).toMatch("Click here")
    //b1.trigger('click')
    wrapper.find("button").trigger('click')

    await wrapper.vm.$nextTick();
    console.log(wrapper.find("p").text())
    expect(wrapper.find("p").text()).toBe(expected_greeting)
    //expect(wrapper.vm.greeting).toMatch(expected_greeting)


  })
})
