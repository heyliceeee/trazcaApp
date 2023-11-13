import { View, StyleSheet, Text, Image, Platform, TextInput } from "react-native";
import { Icon } from "@rneui/themed";
import QuantityProduct from "./quantityProduct";


export default function ItemCart({ img, title, price, value, setValue }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerItemCart}>
                {/* horizontal */}
                <View>
                    <Image style={styles.foodImg} source={img} />
                </View>

                {/* horizontal */}
                <View style={styles.containerImg}>
                    {/* vertical */}
                    <View style={styles.containerTitle}>
                        <Text style={styles.foodTitle}>{title}</Text>
                    </View>
                </View>

                {/* horizontal */}
                <View style={styles.containerImg}>
                    <QuantityProduct price={price} />
                </View>

                {/* horizontal */}
                <View style={styles.containerIcon}>
                    <Icon name="delete" type="antdesign" size={20} color="#a1a1a1" />
                </View>
            </View>

            <View style={styles.containerNote}>
                <TextInput style={styles.inputNote} 
                placeholder="Adicionar uma nota (sem cebola, extra queijo, ...)"
                placeholderTextColor="#A1A1A1"
                numberOfLines={1}
                returnKeyType='next'
                keyboardType="default"      
                value={value} 
                onChangeText={setValue}         
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        marginBottom: 20,
    },

    containerItemCart:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    containerImg:
    {
        flex: 1
    },

    containerTitle:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
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
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerNote: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontWeight: '300',
    },

    inputNote: {

    }
});