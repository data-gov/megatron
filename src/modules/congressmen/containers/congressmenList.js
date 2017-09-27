import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

export class CongressmenList extends Component {
  static propTypes = {
    congressmen: PropTypes.array.isRequired
  }

  renderCongressman = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{item.nome}</Text>
      </View>
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.congressmen}
        keyExtractor={item => item.id}
        renderItem={this.renderCongressman}
      />
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    margin: 100
  }
})
