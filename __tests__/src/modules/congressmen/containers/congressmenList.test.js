import React from 'react'
import { shallow } from 'enzyme'

import { CongressmenList } from '../../../../../src/modules/congressmen/containers/congressmenList'

const props = {
  congressmen: [{
    id: 178957,
    uri: 'https://dadosabertos.camara.leg.br/api/v2/deputados/178957',
    nome: 'ABEL MESQUITA JR.',
    siglaPartido: 'DEM',
    uriPartido: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36769',
    siglaUf: 'RR',
    idLegislatura: 55,
    urlFoto: 'http://www.camara.leg.br/internet/deputado/bandep/178957.jpg'
  }]
}

describe('<CongressmenList />', () => {
  it('should have a snapshot', () => {
    const wrapper = shallow(<CongressmenList {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
