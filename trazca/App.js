import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import CreateAccount from "./src/pages/createAccount";
import Login from "./src/pages/login";
import { Routes } from "./src/routes";


const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />

      <Stack.Navigator initialRouteName="CreateAccount" screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Routes" component={Routes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
