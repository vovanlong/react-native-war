/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <KhachHang hoten="nguyenchimax"></KhachHang>
        <KhachHang hoten="Long"></KhachHang>
        <KhachHang></KhachHang>
      </View>
    )
  }
}


export class KhachHang extends Component{
  render(){
    return(
      <View  style={{backgroundColor:'yellow',padding: 10}}>
        <Text>{this.props.hoten}</Text>
      </View>
    )
  }
}


