import { StyleSheet, ScrollView, View, TextInput } from "react-native";
import { useState } from "react";

import ItemCart from "./components/itemCart";
import Total from "./components/total";
import OtherTotals from "./components/otherTotals";
import Discount from "./components/discount";
import BtnForm from "../createAccount/components/btnForm";


export default function Cart({ navigation }) {
    const [note, setNote] = useState("");
    const [note1, setNote1] = useState("");
    const [note2, setNote2] = useState("");
    const [discount, setDiscount] = useState("");

    const handleDiscount = () => {
        //verificar se o desconto existe e se aplica
        console.log("desconto");
    }

    const handleSubmit = () => {
        //verificar se esta tudo correto, e efetua pedido
        console.log("pedido efetuado");
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerCard}>
                <ItemCart img={{ uri: 'https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1142&q=80' }}
                    title="Pizza Crocante" price="15" value={note} setValue={(note) => setNote(note)}
                />

                <ItemCart img={{ uri: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }}
                    title="SteakHouse" price="5.99" value={note1} setValue={(note1) => setNote1(note1)}
                />

                <ItemCart img={{ uri: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }}
                    title="Franguinho Frito" price="2" value={note2} setValue={(note2) => setNote2(note2)}
                />
            </View>

            <View style={styles.containerTotal}>
                <OtherTotals title="Subtotal" price="37.99" />
                <OtherTotals title="Taxa de Entrega" price="2.00" />

                <View style={styles.containerDiscount}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Inserir Código de Desconto" style={styles.input}
                            placeholderTextColor="#A1A1A1"
                            numberOfLines={1}
                            returnKeyType='next'
                            keyboardType="default"
                            value={discount}
                            onChangeText={setDiscount} />
                    </View>

                    <BtnForm onPress={handleDiscount} style={styles.btnDiscount} textBtn="Aplicar" />
                </View>
                <Discount title="Descontos" price="2.00" />

                <Total title="Total" price="35.99" />
            </View>

            <BtnForm onPress={handleSubmit} style={styles.btnSubmit} textBtn="Finalizar Pedido"/>
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

    containerCard: {
        flex: 1,
        marginBottom: 20,
    },

    containerTotal: {
        flex: 1
    },

    containerDiscount: {
        flex: 1,
        flexDirection: 'row',
    },

    inputContainer: {
        flexDirection: 'row',
        height: 42,
        width: 250,
        borderBottomWidth: 1,
        borderColor: '#A1A1A1',
        paddingBottom: 11,
        backgroundColor: "#fff",
        borderRadius: 4,
        paddingLeft: 5,
        paddingTop: 15,
        fontWeight: 'normal'
    },

    btnDiscount: {
        height: 42,
        width: 95,
        backgroundColor: "#5fb709",
        borderBottomWidth: 1,
        borderColor: '#A1A1A1',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },

    btnSubmit: {
        height: 42,
        width: 350,
        backgroundColor: "#5fb709",
        borderBottomWidth: 1,
        borderColor: '#A1A1A1',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    }
});