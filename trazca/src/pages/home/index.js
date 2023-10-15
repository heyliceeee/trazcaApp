import { View, StyleSheet, Text, Platform, ImageBackground } from "react-native";

import { BlackOverlay } from "./components/blackOverlay";


const image = { uri: 'https://images.unsplash.com/photo-1550984754-8d1b067b0239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1146&q=80' };


export function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Promoção da semana</Text>

            <ImageBackground source={image} style={styles.foodContainer}>
                <BlackOverlay />

                <Text style={styles.foodContainerTitle}>O BURGER MAIS TUGA CHEGOU!</Text>
                <Text style={styles.foodContainerSubtitle}>Grande Hamburger Duplo</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.btn}>EU QUERO!</Text>
                </View>
            </ImageBackground>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },

    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 7
    },

    foodContainer: {
        borderBottomWidth: 1,
        borderColor: '#A1A1A1',
        borderRadius: 4,
        resizeMode: 'cover',
        height: 140,
    },

    foodContainerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        color: "#fff",

        ...Platform.select({
            ios: {
                marginBottom: -4,
                marginTop: 94,
            },

            android: {
                marginBottom: 0,
                marginTop: 92,
            }
        })
    },

    foodContainerSubtitle: {
        fontSize: 16,
        fontWeight: "300",
        marginLeft: 10,
        color: "#fff",

        ...Platform.select({
            ios: {
                marginTop: 8,
            },

            android: {
                marginTop: 0
            }
        })
    },

    inputContainer: {
        backgroundColor: "#5FB709",
        borderColor: "#A1A1A1",
        borderWidth: 1,
        borderRadius: 4,
        alignSelf: 'flex-end',
        marginRight: 10,

        ...Platform.select({
            ios: {
                marginTop: -15,
                width: 89,
            },

            android: {
                marginTop: -21,
                width: 85,
            }
        })
    },

    btn: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 5,
    },
});