/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MyTabs from './Navigation/Bottom';



function App(): JSX.Element {
  

  return (
    <SafeAreaView style={styles.container} >
      
      <MyTabs/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    height:'100%'
  }
});
export default App;
