/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    console.log('hello constructor')
  }
  render() {
    console.log('hello')
    return (
      <View style={ao.bao}>
        <View style={ao.dong}>
          <View style={ao.cot}>
          <Text style={ao.number}>1</Text>
          </View>
          <View style={ao.cot}>
            <Text style={ao.number}>2</Text>
            <Text style={ao.text}>ABC</Text>
          </View>
          <View style={ao.cot}>
          <Text style={ao.number}>3</Text>
            <Text style={ao.text}>DEF</Text>
          </View>
        </View>

        <View style={ao.dong}>
          <View style={ao.cot}>
            <Text style={ao.number}>4</Text>
            <Text style={ao.text}>GHI</Text>
          </View>
          <View style={ao.cot}>
            <Text style={ao.number}>5</Text>
            <Text style={ao.text}>JKG</Text>
          </View>
          <View style={ao.cot}>
            <Text style={ao.number}>6</Text>
            <Text style={ao.text}>MNO</Text>
          </View>
        </View>

        <View style={ao.dong}>
          <View style={ao.cot}>
            <Text style={ao.number}>7</Text>
            <Text style={ao.text}>PQRS</Text>
          </View>
          <View style={ao.cot}>
          <Text style={ao.number}>8</Text>
            <Text style={ao.text}>TUV</Text>
          </View>
          <View style={ao.cot}>
          <Text style={ao.number}>9</Text>
            <Text style={ao.text}>WXYZ</Text>
          </View>
        </View>

        <View style={ao.dong}>
          <View style={ao.cot}></View>
          <View style={ao.cot}>
            <Text style={ao.number}>0</Text>
          </View>
          <View style={ao.cot}></View>
        </View>
      </View>
    );
  }
}

var ao = StyleSheet.create({
  bao:{
    flex:1
  },
  dong:{
    flex:1,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  cot: {
    flex:1,
    borderRightWidth:1,
    borderRightColor: 'black',
    justifyContent: 'center',
    alignItems: "center"
  },
  number:{
    fontSize:40
  }
});

