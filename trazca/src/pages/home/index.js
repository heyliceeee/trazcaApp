import { View, StyleSheet, Text, Platform, ImageBackground, Image, ScrollView } from "react-native";

import { BlackOverlay } from "./components/blackOverlay";
import FoodContainer from "./components/foodContainer";
import CommentContainer from "./components/commentContainer";


const image = { uri: 'https://images.unsplash.com/photo-1550984754-8d1b067b0239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1146&q=80' };


export function Home({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View>
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

            <View>
                <View style={styles.chefContainerText}>
                    <Text style={styles.chefContainerTitle}>Sugestão do Chef</Text>

                    <View style={styles.moreContainer}>
                        <Text style={styles.moreSubtitle}>ver todas</Text>
                        <Text style={styles.moreSubtitle}> &gt;&gt;</Text>
                    </View>
                </View>

                <View style={styles.foodsContainer}>
                    <FoodContainer img={{ uri: 'https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1142&q=80' }}
                        title="Pizza Crocante" subtitle="Pizza Hut" price="15€" colorStar1="#ffc90c" colorStar2="#ffc90c" colorStar3="#ffc90c" colorStar4="#ffc90c" colorStar5="#c4c4c4"
                    />

                    <FoodContainer img={{ uri: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }}
                        title="SteakHouse" subtitle="Burger King" price="5,99€" colorStar1="#ffc90c" colorStar2="#ffc90c" colorStar3="#ffc90c" colorStar4="#ffc90c" colorStar5="#ffc90c"
                    />
                </View>

                <View style={styles.foodsContainer1}>
                    <FoodContainer img={{ uri: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }}
                        title="Franguinho Frito" subtitle="KFC" price="2€" colorStar1="#ffc90c" colorStar2="#c4c4c4" colorStar3="#c4c4c4" colorStar4="#c4c4c4" colorStar5="#c4c4c4"
                    />

                    <FoodContainer img={{ uri: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80' }}
                        title="Double CheeseBurger" subtitle="McDonald's" price="1,50€" colorStar1="#ffc90c" colorStar2="#ffc90c" colorStar3="#ffc90c" colorStar4="#ffc90c" colorStar5="#ffc90c"
                    />
                </View>
            </View>

            <View style={styles.chefContainerText}>
                <Text style={styles.chefContainerTitle}>Os clientes recomendam</Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.commentsContainer}>
                <CommentContainer username='Alice Dias' comment='O Double ChesseBurger estava delicioso!' img={{uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80'}}/>
                <CommentContainer username='Bruno Pinheiro' comment='O SteakHouse estava delicioso, mas é demasiado pequeno para mim.' img={{uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'}}/>
                <CommentContainer username='Francisco Guimarães' comment='A Pizza Crocante estava deliciosa, pena que seja preciso doar um rim para a pagar.' img={{uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
                <CommentContainer username='Matilde Dias' comment='O Double CheeseBurger estava delicioso, mas quando chego a casa continuo com fome.' img={{uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
            </ScrollView>
        </ScrollView>
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
        borderWidth: 1,
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

    chefContainerText: {
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 2,
        alignItems: 'center'
    },

    chefContainerTitle: {
        fontSize: 20,
        fontWeight: "700",
    },

    moreContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    moreSubtitle: {
        fontSize: 14,
        fontWeight: "400",
        color: "#5fb709"
    },

    foodsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between'
    },

    foodsContainer1: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 0,
        justifyContent: 'space-between',
    },

    commentsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5
    },
});