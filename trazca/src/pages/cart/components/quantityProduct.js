import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";



export default function QuantityProduct({ price }) {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        if (quantity < 10000) {
            setQuantity(quantity + 1);
        }
    };

    const totalPrice = (price * quantity).toFixed(2); // Calculate the total price

    return (
        <View style={styles.container}>
            <View style={styles.containerHorizontal}>
                <Text style={styles.foodPrice}>{totalPrice}€</Text>
            </View>

            <View style={styles.containerVertical}>
                <TouchableOpacity style={styles.containerMinusPlus} onPress={decreaseQuantity}>
                    <Text style={styles.textMinusPlus}>-</Text>
                </TouchableOpacity>

                <View style={styles.containerQuantity}>
                    <Text style={styles.textQuantity}>{quantity}</Text>
                </View>

                <TouchableOpacity style={styles.containerMinusPlus} onPress={increaseQuantity}>
                    <Text style={styles.textMinusPlus}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        marginRight: 15,
        marginLeft: 15,
    },

    containerHorizontal:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    foodPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 0,
        color: "#5fb709",
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    containerVertical:
    {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
    },

    containerMinusPlus: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: "#5fb709",
        borderColor: "#5fb709"
    },

    textMinusPlus: {
        color: "#fff",
        fontSize: 14,
        textAlign: 'center'
    },

    containerQuantity: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#e3e3e3",
        borderColor: "#e3e3e3",
        borderWidth: 1,
        borderRadius: 4,
    },
});