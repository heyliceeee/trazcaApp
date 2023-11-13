import { View, StyleSheet, Text, Image, Platform } from "react-native";
import { Icon } from "@rneui/themed";
import QuantityProduct from "./quantityProduct";


export default function ItemCart({ img, title, price }) {
    return (
        <View style={styles.container}>
            {/* horizontal */}
            <View>
                <Image style={styles.foodImg} source={img} />
            </View>

            {/* horizontal */}
            <View style={styles.containerImg}>
                {/* vertical */}
                <View style={styles.containerTitlePrice}>
                    <Text style={styles.foodTitle}>{title}</Text>
                </View>
            </View>

            {/* horizontal */}
            <View style={styles.containerImg}>
                <QuantityProduct price={price}/>
            </View>

            {/* horizontal */}
            <View style={styles.containerIcon}>
                <Icon name="delete" type="antdesign" size={20} color="#a1a1a1" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    containerImg:
    {
        flex: 1
    },

    containerTitlePrice:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    foodImg:
    {
        height: 60,
        width: 60,
    },

    foodTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,

        ...Platform.select({
            ios: {
                marginBottom: 2,
            },

            android: {
                marginBottom: 0,
            }
        })
    },

    foodPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 0,
        color: "#5fb709",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 10,
        marginLeft: 10,
    },

    containerIcon:
    {
        alignContent: 'center',
        justifyContent: 'center',
    },
});