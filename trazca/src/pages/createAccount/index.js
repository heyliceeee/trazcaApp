import { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, TextInput, TouchableHighlight, Text} from 'react-native';

import InputFormPassword from './components/inputFormPassword';
import InputForm from './components/inputForm';
import ErrorForm from './components/errorForm';
import BtnForm from './components/btnForm';


const image = {uri: 'https://images.unsplash.com/photo-1596138641000-42fda7eeb97f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'} ;


export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const [showErrorEmailInput, setShowErrorEmailInput] = useState(false);
  const [showErrorPhoneNumberInput, setShowErrorPhoneNumberInput] = useState(false);
  const [showErrorPasswordInput, setShowErrorPasswordInput] = useState(false);
  const [showErrorConfirmPasswordInput, setShowErrorConfirmPasswordInput] = useState(false);
  

  const handleSubmit = () => {
    //verificar se o email é válido
    const regEmail = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if(email.length === 0 || regEmail.test(email) === false){
      setShowErrorEmailInput(true);

    } else if(regEmail.test(email) === true){
      setShowErrorEmailInput(false);
    }


    //verificar se o n. de tel. é válido
    const regPhoneNumber = /^(?:91|92|93|96)\s?\d\s?\d\s?\d\s?\d\s?\d\s?\d\s?\d$/;

    if(phoneNumber.length === 0 || regPhoneNumber.test(phoneNumber) === false){
      setShowErrorPhoneNumberInput(true);

    } else if(regPhoneNumber.test(phoneNumber) === true){
      setShowErrorPhoneNumberInput(false);
    }


    //verificar se a password é válida
    const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/;

    if(password.length === 0 || password.length < 8 || regPassword.test(password) === false){
      setShowErrorPasswordInput(true);

    } else if(regPassword.test(password) === true){
      setShowErrorPasswordInput(false);
    }

    //verificar se a confirm password é válida
    if(confirmPassword.length === 0 || confirmPassword.length < 8){
      setShowErrorConfirmPasswordInput(true);

    } else if(password == confirmPassword){
      setShowErrorConfirmPasswordInput(false);
    }

    //console.log("email: " + email, "phone: "+ phoneNumber, "pass: "+ password, "confirm pass: "+ confirmPassword);
  }

  const goLoginPage = () => {
    console.log("go login page");
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background}>

        <Image source={require("../../../src/assets/logo.png")} style={styles.logo}/>

        <InputForm nameIcon='mail' typeIcon='antdesign' placeholder='Introduza o seu email' keyboardType='email-address' value={email} setValue={(email) => setEmail(email)} />
        { showErrorEmailInput && <ErrorForm textError='Introduza um email válido!'/>}

        <InputForm nameIcon='phone' typeIcon='antdesign' placeholder='Introduza o seu número de telemóvel' keyboardType='numeric' value={phoneNumber} setValue={(phoneNumber) => setPhoneNumber(phoneNumber)} />
        { showErrorPhoneNumberInput && <ErrorForm textError='Introduza um número de telemóvel válido! (número de telemóvel português)'/>}

        <InputFormPassword nameIcon='lock' typeIcon='antdesign' placeholder='Introduza a sua palavra-passe' keyboardType='default' value={password} setValue={password => setPassword(password)} setSecureTextEntry={hidePassword} onPress={() => setHidePassword(!hidePassword)} />
        { showErrorPasswordInput && <ErrorForm textError='Introduza uma palavra-passe válida! (8 ou mais caracteres com pelo menos um dígito, uma letra minúscula, uma letra maiúscula e um caractere especial)'/> }

        <InputFormPassword nameIcon='lock' typeIcon='antdesign' placeholder='Confirme a sua palavra-passe' keyboardType='default' value={confirmPassword} setValue={confirmPassword => setConfirmPassword(confirmPassword)} setSecureTextEntry={hideConfirmPassword} onPress={() => setHideConfirmPassword(!hideConfirmPassword)}/>
        { showErrorConfirmPasswordInput && <ErrorForm textError='Introduza uma palavra-passe válida e que coincide com a palavra passe!'/> }

        <BtnForm onPress={handleSubmit} style={styles.btnCreateAccount} textBtn='Criar Conta'/>
        <BtnForm onPress={goLoginPage} style={styles.btnLogin} textBtn='Iniciar Sessão'/>
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

  btnCreateAccount: {
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

  btnLogin: {
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
