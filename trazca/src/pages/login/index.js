import { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, TextInput, TouchableHighlight, Text} from 'react-native';

import InputFormPassword from './../createAccount/components/inputFormPassword';
import InputForm from './../createAccount/components/inputForm';
import ErrorForm from './../createAccount/components/errorForm';
import BtnForm from './../createAccount/components/btnForm';


const image = {uri: 'https://images.unsplash.com/photo-1596138641000-42fda7eeb97f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'} ;


export default function Login({navigation}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hidePassword, setHidePassword] = useState(true);

  const [showErrorEmailInput, setShowErrorEmailInput] = useState(false);
  const [showErrorPasswordInput, setShowErrorPasswordInput] = useState(false);


  const handleSubmit = () => {
    //verificar se o email é válido
    const regEmail = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if(email.length === 0 || regEmail.test(email) === false){
      setShowErrorEmailInput(true);

    } else if(regEmail.test(email) === true){
      setShowErrorEmailInput(false);
    }


    //verificar se a password é válida
    const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/;

    if(password.length === 0 || password.length < 8 || regPassword.test(password) === false){
      setShowErrorPasswordInput(true);

    } else if(regPassword.test(password) === true){
      setShowErrorPasswordInput(false);
    }

    //console.log("email: " + email, "phone: "+ phoneNumber, "pass: "+ password, "confirm pass: "+ confirmPassword);
    
    //sem erros (mas no futuro vai comparar as credenciais)
    if(showErrorEmailInput == false && showErrorPasswordInput == false){
      navigation.navigate('Routes', { screen: 'Home' });
    }
  }


    return(
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.background}>
          <Image source={require("../../../src/assets/logo.png")} style={styles.logo}/>

          <InputForm nameIcon='mail' typeIcon='antdesign' placeholder='Introduza o seu email' keyboardType='email-address' value={email} setValue={(email) => setEmail(email)} />
          { showErrorEmailInput && <ErrorForm textError='Introduza um email válido!'/>}

          <InputFormPassword nameIcon='lock' typeIcon='antdesign' placeholder='Introduza a sua palavra-passe' keyboardType='default' value={password} setValue={password => setPassword(password)} setSecureTextEntry={hidePassword} onPress={() => setHidePassword(!hidePassword)} />
          { showErrorPasswordInput && <ErrorForm textError='Introduza uma palavra-passe válida! (8 ou mais caracteres com pelo menos um dígito, uma letra minúscula, uma letra maiúscula e um caractere especial)'/> }

        <BtnForm onPress={handleSubmit} style={styles.btnLogin} textBtn='Iniciar Sessão'/>
        <BtnForm onPress={() => navigation.navigate('CreateAccount')} style={styles.btnCreateAccount} textBtn='Criar Conta'/>
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
  
    btnLogin: {
      height: 42,
      width: 350,
      backgroundColor: "#5fb709",
      borderBottomWidth: 1,
      borderColor: '#A1A1A1',
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
  
    btnCreateAccount: {
      height: 42,
      width: 350,
      backgroundColor: "#5fb709",
      borderBottomWidth: 1,
      borderColor: '#A1A1A1',
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 29
    }
});