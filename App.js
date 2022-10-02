import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import art from './assets/art.png';
import mile from './assets/mile.png';
import pier from './assets/pier.png';
import water from './assets/water.png';
import willis from './assets/willis.png';

function ArtInstituteOfChicago(navigation) {
  return(
    <View style={styles.container}>
      <Image source={art} style={styles.image} />
    </View>
  )
}

function MagnificentMile(navigation) {
  return (
    <View style={styles.container}>
      <Image source={mile} style={styles.image} />
    </View>
  )
}

function NavyPier(navigation) {
  return (
    <View style={styles.container}>
      <Image source={pier} style={styles.image} />
    </View>
  )
}

function WaterTower(navigation) {
  return (
    <View style={styles.container}>
      <Image source={water} style={styles.image} />
    </View>
  )
}

function WillisTower(navigation) {
  return (
    <View style={styles.container}>
      <Image source={willis} style={styles.image} />
    </View>
  )
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="ArtInstituteOfChicago">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtInstituteOfChicago} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 480,
  }
});
