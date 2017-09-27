// @flow

// $FlowFixMe
import Expo from 'expo'
import React, { Component } from 'react'
import { View } from 'react-native'

import { fetchAllCongressmen } from './services/bumblebee'
import { CongressmenList } from './modules/congressmen/containers/congressmenList'

class App extends Component {
  state = { congressmen: [] }

  componentDidMount = async () => {
    const response = await fetchAllCongressmen()
    this.setState({ congressmen: response.dados })
  }

  render() {
    return (
      <View>
        <CongressmenList congressmen={this.state.congressmen} />
      </View>
    )
  }
}

Expo.registerRootComponent(App)
export default App
