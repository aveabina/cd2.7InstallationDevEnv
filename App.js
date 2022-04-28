import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CD2.7 - INSTALATION DEVELOPMENT ENVIROMENT</Text>
      <Image style={styles.img} source={{uri: 'https://www.clipartmax.com/png/full/175-1759501_computer-icons-plumbing-installation-building-vw-audi-computer-icons-plumbing-installation-building.png'}} />
      <StatusBar style="auto" />
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
  img: {
    margin:20,
    width: 200,
    height: 200
  }
});
