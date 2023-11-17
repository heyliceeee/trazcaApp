import { StyleSheet, View, Text } from "react-native";


export default function Discount({ title, price }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}€</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 10
    },

    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },

    price: {
        fontSize: 20,
        color: "#eb5757",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        fontWeight: 'bold',
    }
});