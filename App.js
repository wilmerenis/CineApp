import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { StyleSheet, View } from 'react-native';

import { store } from './redux/store'

/* SCENES */
import HomePage from './scenes/HomePage'
/* SCENES */

export default function App() {
  const [state, setState] = useState({ isReady: false })

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({ 'Oswald': require('./assets/Fonts/Oswald/Oswald-VariableFont_wght.ttf') })

      setState({ isReady: true })
    }
    loadFont()
  }, [])
  return (
    state.isReady ? (
      <Provider store={store} >
        <View style={styles.container}>
          <HomePage/>
        </View>
      </Provider>
    ) : <AppLoading/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#141414'
  },
});
