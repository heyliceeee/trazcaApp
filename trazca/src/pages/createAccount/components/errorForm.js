import { StyleSheet, View, Text } from "react-native";


export default function ErrorForm({textError}){
    return (
        <View>
            <Text style={styles.errorInput}>
                {textError}
            </Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    errorInput: {
        fontSize: 14,
        marginTop: 5,
        marginLeft: 33,
        marginRight: 33,
        color: "red",
        fontWeight: 'bold'
      }
});