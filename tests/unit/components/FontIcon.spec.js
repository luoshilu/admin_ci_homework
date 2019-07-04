import { shallowMount } from '@vue/test-utils'
import FontIcon from '@/components/FontIcon.vue'

describe('FontIcon.vue', () => {
  it('renders props.msg when passed', () => {
    const type = 'cog'
    const size = 16
    const custom = "custom-class"
    const wrapper = shallowMount(FontIcon, {
      propsData: { type, size, custom },
    })
    
    expect(wrapper.html()).toEqual(`<i class="icon icon-${type} ${custom}" style="font-size: ${size}px;"></i>`)
  })
})
