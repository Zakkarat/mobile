import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Router} from "./components/Router";
import {RouteSwitch} from "./components/Switchers/RouteSwitch";

export default function App() {
  const [route, setRoute] = useState("");


  return (
    <View style={styles.container}>
      <Router route={route} setRoute={setRoute}/>
      <RouteSwitch route={route}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
