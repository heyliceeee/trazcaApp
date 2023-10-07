import { Icon } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, TextInput} from 'react-native';


const image = {uri: 'https://images.unsplash.com/photo-1596138641000-42fda7eeb97f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'} ;


export default function App() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);


  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background}>

        <Image source={require("./src/assets/logo.png")} style={styles.logo}/>

        {/* <Input placeholder='Introduza o seu email' errorStyle={{color: 'red'}} errorMessage='Introduza um email válido' style={styles.input}/>
        <Input placeholder='Introduza o seu número de telemóvel' errorStyle={{color: 'red'}} errorMessage='Introduza um número de telemóvel válido'/>
        <Input placeholder='Introduza a sua palavra-passe' errorStyle={{color: 'red'}} errorMessage='Introduza uma palavra-passe válida' secureTextEntry={true}/>
        <Input placeholder='Confirme a sua palavra-passe' errorStyle={{color: 'red'}} errorMessage='Introduza uma palavra-passe válida' secureTextEntry={true}/> */}

        <View style={styles.inputContainer}>
          <Icon style={styles.inputLeftIcon} name='mail' type='antdesign' color='#323232' size={16} />

          <TextInput placeholder='Introduza o seu email' style={styles.input} 
            placeholderTextColor="#A1A1A1"
            numberOfLines={1}
            returnKeyType='next'
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon style={styles.inputLeftIcon} name='phone' type='antdesign' color='#323232' size={16} />

          <TextInput placeholder='Introduza o seu número de telemóvel' style={styles.input} 
            placeholderTextColor="#A1A1A1"
            numberOfLines={1}
            returnKeyType='next'
            keyboardType='numeric'
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon style={styles.inputLeftIcon} name='lock' type='antdesign' color='#323232' size={16} />

          <TextInput placeholder='Introduza a sua palavra-passe' style={styles.input} 
            secureTextEntry={hidePassword ? true : false}
            numberOfLines={1}
            returnKeyType='next'
            onChangeText={password => setPassword({password})}
          />

          <Icon style={styles.inputRightIcon} name={hidePassword ? 'eye-with-line' : 'eye'} type='entypo' color='#323232' size={16} onPress={() => setHidePassword(!hidePassword)}/>
        </View>

        <View style={styles.inputContainer}>
          <Icon style={styles.inputLeftIcon} name='lock' type='antdesign' color='#323232' size={16} />

          <TextInput placeholder='Confirme a sua palavra-passe' style={styles.input} 
            secureTextEntry={hideConfirmPassword ? true : false}
            numberOfLines={1}
            returnKeyType='next'
            onChangeText={confirmPassword => setConfirmPassword({confirmPassword})}
          />

          <Icon style={styles.inputRightIcon} name={hideConfirmPassword ? 'eye-with-line' : 'eye'} type='entypo' color='#323232' size={16} onPress={() => setHideConfirmPassword(!hideConfirmPassword)}/>
        </View>
       
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  logo: {
    marginTop: 0,
    marginBottom: 0,
    justifyContent: 'center'
  },


  inputContainer: {
    flexDirection: 'row',
    height: 42,
    width: 350,
    borderBottomWidth: 1,
    borderColor: '#A1A1A1',
    paddingBottom: 11,
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingLeft: 5,
    paddingTop: 15,
    marginTop: 20
  },

  inputLeftIcon: {
    marginTop: -1,
    marginLeft: 5
  },

  inputRightIcon: {
    marginTop: -1,
    marginRight: 10
  },

  input: {
    flex: 1,
    fontSize: 14,
    marginLeft: 5
  },



  passwordContainer: {
    flexDirection: 'row',
    height:35,
    width: 350,
    borderBottomWidth: 1,
    borderColor: '#A1A1A1',
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingLeft: 5,
    paddingTop: 10
  },

  inputPassword: {
    flex: 1,
    fontSize: 14
  },



  emailSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  inputEmail: {
    //height: 43,
    //width: 300,
    backgroundColor: "#fff",
    //marginTop: 21,
    //marginBottom: 0,
    borderRadius: 4,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0
  },



  inputPhoneNumber: {
    height: 43,
    width: 300,
    backgroundColor: "#fff",
    marginTop: 21,
    marginBottom: 0,
    borderRadius: 4
  },

  inputPassword: {
    height: 43,
    width: 300,
    backgroundColor: "#fff",
    marginTop: 21,
    borderRadius: 4
  },

  inputConfirmPassword: {
    height: 43,
    width: 300,
    backgroundColor: "#fff",
    margin: 0,
    borderRadius: 4
  },


  passwordSection: {
    flex: 1,
    margin: 0
  },

  passwordConfirmSection: {
    flex: 1,
    margin: 0
  }
});
