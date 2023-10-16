import { View, StyleSheet, Text, Image, Platform } from "react-native";
import { Icon } from "@rneui/themed";


export default function FoodContainer({ img, title, subtitle, price, colorStar1, colorStar2, colorStar3, colorStar4, colorStar5 }) {
    return (
        <View style={styles.foodCard}>
            <Image style={styles.foodImg} source={img} />
            <Text style={styles.foodTitle}>{title}</Text>
            <Text style={styles.foodSubtitle}>{subtitle}</Text>

            <View style={styles.footerCard}>
                <View style={styles.starsContainer}>
                    <Icon name="star" type="antdesign" size={12} color={colorStar1} />
                    <Icon name="star" type="antdesign" size={12} color={colorStar2} />
                    <Icon name="star" type="antdesign" size={12} color={colorStar3} />
                    <Icon name="star" type="antdesign" size={12} color={colorStar4} />
                    <Icon name="star" type="antdesign" size={12} color={colorStar5} />
                </View>

                <Text style={styles.foodPrice}>{price}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    foodCard: {
        borderColor: "#a1a1a1",
        borderWidth: 1,
        borderRadius: 4,
        height: 160,

        ...Platform.select({
            ios: {
                width: 173,
            },

            android: {
                width: 190,
            }
        })
    },

    foodImg: {
        height: 95
    },

    foodTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 3,

        ...Platform.select({
            ios: {
                marginBottom: 2,
            },

            android: {
                marginBottom: 0,
            }
        })
    },

    foodSubtitle: {
        fontSize: 14,
        fontWeight: '300',
        marginLeft: 3,
        color: "#a1a1a1",
    },

    footerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,

        ...Platform.select({
            ios: {
                marginTop: 13,
            },

            android: {
                marginTop: 8,
            }
        })
    },

    starsContainer: {
        flexDirection: 'row',
        marginLeft: 3,
    },

    foodPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 0,
        color: "#5fb709",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 3,
    },
});