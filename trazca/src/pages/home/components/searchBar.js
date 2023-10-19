import { useState } from 'react';
import { Icon } from "@rneui/themed";
import { StyleSheet, TextInput, View, Platform } from "react-native";


export default function SearchBar() {

    const [search, setSearch] = useState("");

    const handleSubmit = () => {
        console.log(search);
    }


    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Pesquise a sua comida favorita..." style={styles.input}
                placeholderTextColor="#A1A1A1"
                numberOfLines={1}
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
    inputContainer: {
        flexDirection: 'row',
        height: 42,
        borderBottomWidth: 1,
        borderColor: '#A1A1A1',
        paddingBottom: 11,
        backgroundColor: "#fff",
        borderRadius: 4,
        paddingLeft: 5,
        paddingTop: 15,
        fontWeight: 'normal',

        ...Platform.select({
            ios: {
                width: 350,
                marginTop: -10
            },

            android: {
                width: 390,
                marginTop: 0
            }
        })
    },

    inputLeftIcon: {
        marginTop: -1,
        marginLeft: 5
    },

    input: {
        flex: 1,
        fontSize: 14,
        marginLeft: 5,
        textAlign: 'left'
    },

    inputRightIcon: {
        marginTop: -1,
        marginRight: 10
    }
});