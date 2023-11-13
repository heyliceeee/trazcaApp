import { View, StyleSheet, Text } from "react-native";


export default function QuantityProduct({ price }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerHorizontal}>
                <Text style={styles.foodPrice}>{price}€</Text>
            </View>

            <View style={styles.containerVertical}>
                <View style={styles.containerMinusPlus}>
                    <Text style={styles.textMinusPlus}>-</Text>
                </View>

                <View style={styles.containerQuantity}>
                    <Text style={styles.textQuantity}>1</Text>
                </View>

                <View style={styles.containerMinusPlus}>
                    <Text style={styles.textMinusPlus}>+</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        marginRight: 10,
        marginLeft: 10,
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