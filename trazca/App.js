import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")} style={styles.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5fb709',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginBottom: 650
  }
});
