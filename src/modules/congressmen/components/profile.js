import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image } from 'react-native'

import { profileStyle } from './styles/profile.style'

export const Profile = (props) => {
  const { urlFoto, nome } = props.congressman

  return (
    <View style={profileStyle.container}>
      <Image
        style={profileStyle.picture}
        source={{ uri: urlFoto }}
      />
      <Text style={profileStyle.text}>{nome}</Text>
    </View>
  )
}

Profile.propTypes = {
  congressman: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    urlFoto: PropTypes.string.isRequired
  }).isRequired
}
