import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class UserItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <View
        style={{
          flex: 1,
          width: width,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={styles.container}>
          <Text style={styles.text_name}>{item.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#ffffff',
    marginTop: 10,
    paddingLeft: 10
  },
  text_name: {
    color: '#8ba4cc',
    fontSize: 25
  }
});
