import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { Profile } from '../components/profile'

export const CongressmenList = props => (
  <FlatList
    data={props.congressmen}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (<Profile congressman={item} />)}
  />
)

CongressmenList.propTypes = {
  congressmen: PropTypes.array.isRequired
}
