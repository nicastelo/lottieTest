/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Anim from './anim'

const App = () => {
  return (
    <SafeAreaView>
      <Anim showAnim source={require('./info.json')} />
      <Anim showAnim source={require('./data.json')} />
    </SafeAreaView>
  );
};

export default App;
