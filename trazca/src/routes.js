import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from '@rneui/themed';
import { Text } from "react-native";

import { Home } from "./pages/home";
import SearchBar from "./pages/home/components/searchBar";


const Tab = createBottomTabNavigator();


export function Routes(){
    return (
        <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: '#5FB709'}}}>
            <Tab.Screen name='Home' component={Home}
                options={{
                    headerShown: true, 
                    headerStyle: {backgroundColor: '#5fb709'}, 
                    headerTintColor: '#fff',
                    headerTitle: () => <SearchBar />,
                    tabBarShowLabel: true,
                    tabBarLabel: ({focused, color}) => (<Text style={{ fontSize: focused ? 14 : 12, color: '#ffff' }}>Página Inicial</Text>),
                    tabBarIcon: ({focused, size, color }) => {
                    if(focused){
                        return <Icon color='#ffff' size={30} name='home' type="ionicons"/>
                    }
                    
                    return <Icon color='#ffff' size={30} name='home-outline' type="ionicons"/>
                }
            }}/>

        </Tab.Navigator>
    );
}
