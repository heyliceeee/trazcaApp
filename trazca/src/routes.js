import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from '@rneui/themed';
import { Text } from "react-native";

import { Home } from "./pages/home";
import SearchBar from "./pages/home/components/searchBar";
import Cart from "./pages/cart";
import Order from "./pages/order";
import Profile from "./pages/profile";


const Tab = createBottomTabNavigator();


export function Routes() {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#5FB709' } }}>
            <Tab.Screen name='Home' component={Home}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#5fb709' },
                    headerTintColor: '#fff',
                    headerTitle: () => <SearchBar />,
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color }) => (<Text style={{ fontSize: focused ? 14 : 12, color: '#ffff' }}>Página Inicial</Text>),
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Icon color='#ffff' size={30} name="home" type="ionicon" />
                        }

                        return <Icon color='#ffff' size={30} name="home-outline" type="ionicon" />
                    }
                }} />


            <Tab.Screen name='Cart' component={Cart}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#5fb709' },
                    headerTintColor: '#fff',
                    headerTitle: 'Carrinho',
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color }) => (<Text style={{ fontSize: focused ? 14 : 12, color: '#ffff' }}>Carrinho</Text>),
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Icon color='#ffff' size={30} name="cart" type="ionicon" />
                        }

                        return <Icon color='#ffff' size={30} name="cart-outline" type="ionicon" />
                    }
                }} />


            <Tab.Screen name='Order' component={Order}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#5fb709' },
                    headerTintColor: '#fff',
                    headerTitle: 'Pedido',
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color }) => (<Text style={{ fontSize: focused ? 14 : 12, color: '#ffff' }}>Pedido</Text>),
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Icon color='#ffff' size={30} name="list" type="ionicon" />
                        }

                        return <Icon color='#ffff' size={30} name="list-outline" type="ionicon" />
                    }
                }} />

            <Tab.Screen name='Profile' component={Profile}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#5fb709' },
                    headerTintColor: '#fff',
                    headerTitle: 'Perfil',
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color }) => (<Text style={{ fontSize: focused ? 14 : 12, color: '#ffff' }}>Perfil</Text>),
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Icon color='#ffff' size={30} name="person" type="ionicon" />
                        }

                        return <Icon color='#ffff' size={30} name="person-outline" type="ionicon" />
                    }
                }} />
        </Tab.Navigator>
    );
}
