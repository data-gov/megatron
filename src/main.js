// @flow

// $FlowFixMe
import Expo from 'expo'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { fetchAllCongressmen } from './services/megazord'
import { CongressmenList } from './modules/congressmen/containers/congressmenList'

class App extends Component {
  state = { congressmen: [] }

  componentDidMount = async () => {
    const response = await fetchAllCongressmen()
    this.setState({ congressmen: response.dados })
  }

  render() {
    return (
      <View style={styles.container}>
        <CongressmenList congressmen={this.state.congressmen} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

Expo.registerRootComponent(App)
export default App
