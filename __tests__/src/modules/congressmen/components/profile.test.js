import React from 'react'
import { shallow } from 'enzyme'

import { Profile } from '../../../../../src/modules/congressmen/components/profile'
import { congressman } from '../../../../fixtures/congressman.fixture'

const props = {
  congressman
}

describe('<Profile />', () => {
  it('should have a snapshot', () => {
    const wrapper = shallow(<Profile {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
