import { Text, TouchableHighlight, StyleSheet } from "react-native";


export default function BtnForm({onPress, textBtn, style}){
    return (
        <TouchableHighlight onPress={onPress} style={style}>
            <Text style={styles.btnText}>{textBtn}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    btnText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: 'bold'
    }
});