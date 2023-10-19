import { View, StyleSheet, Image, Text } from "react-native";


export default function CommentContainer({img, username, comment}) {
    return (
        <View style={styles.container}>
            <View style={{justifyContent: 'center'}}>
                <Image style={styles.img} source={img} />
            </View>

            <View style={{justifyContent: 'center'}}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.comment}>{comment}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5fb709",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#a1a1a1",
        height: 74,
        width: 325,
        marginRight: 10,
        flexDirection: 'row'
    },

    img: {
        height: 45,
        width: 45,
        marginLeft: 5,
        borderRadius: 50
    },

    username: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 5,
        marginRight: 50
    },

    comment: {
        fontSize: 14,
        fontWeight: "400",
        color: "#FFFF",
        marginLeft: 5,
        marginRight: 55
    }
});