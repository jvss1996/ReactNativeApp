/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './Splash';
import Login from './src/components/Login/Login';

export default class GithubApp extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Hello
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.android.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text>
      // </View>
      <Splash/>
      //<Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GithubApp', () => GithubApp);
