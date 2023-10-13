import { useState } from 'react';
import { Icon } from "@rneui/themed";
import { StyleSheet, TextInput, View } from "react-native";


export default function SearchBar() {

    const [search, setSearch] = useState("");

    const handleSubmit = () => {
        console.log(search);
    }


    return (
        <View style={styles.container}>
            <TextInput placeholder='Pesquisa a sua comida preferida...' style={styles.input}
                placeholderTextColor="#A1A1A1"
                numberOfLines={1}
                returnKeyType='next'
                keyboardType='default'
                value={search}
                onChangeText={(search) => setSearch(search)}
            />

            <Icon style={styles.inputRightIcon} name='search1' type='antdesign' color='#323232' size={16}
                onPress={handleSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 42,
        width: 350,
        borderBottomWidth: 1,
        borderColor: '#A1A1A1',
        paddingBottom: 11,
        backgroundColor: "#fff",
        borderRadius: 4,
        paddingLeft: 5,
        paddingTop: 15,
        marginTop: -15,
        fontWeight: 'normal'
    },

    input: {
        flex: 1,
        fontSize: 14,
        marginLeft: 5
    },

    inputRightIcon: {
        marginTop: -1,
        marginRight: 10
    }
});