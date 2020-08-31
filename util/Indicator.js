import React, { Component } from 'react';
import {View, ActivityIndicator } from 'react-native';

class CIndicator extends Component {

  constructor() {
    super();
  }

  render(){
    return (
      <View style={{flex: 1, justifyContent:'center', alignsItem:'center'}}>
      <ActivityIndicator color='gray' size ={'large'} />
      </View>
    );
  }
}

const  Indicator = CIndicator;

export {Indicator};