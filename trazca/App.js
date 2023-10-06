import { StyleSheet, Text, View, Image, ImageBackground, TextInput, ScrollView } from 'react-native';


const image = {uri: 'https://images.unsplash.com/photo-1596138641000-42fda7eeb97f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'} ;


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.background}>

        <Image source={require("./src/assets/logo.png")} style={styles.logo}/>

        <TextInput placeholder='Introduza o seu email' style={styles.inputEmail} numberOfLines={1}/>
        <TextInput placeholder='Introduza o seu número de telemóvel' style={styles.input} numberOfLines={1}/>
        <TextInput placeholder='Introduza a sua palavra-passe' style={styles.input} numberOfLines={1}/>
        <TextInput placeholder='Confirme a sua palavra-passe' style={styles.input} numberOfLines={1}/>

      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    marginBottom: 650,
    justifyContent: 'center'
  },

  inputEmail: {
    height: 43,
    width: 300,
    backgroundColor: "#fff",
    marginTop: -600,
    borderRadius: 4
  },

  input: {
    height: 43,
    width: 300,
    backgroundColor: "#fff",
    marginTop: 21,
    borderRadius: 4
  }
});
