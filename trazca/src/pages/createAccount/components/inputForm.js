import { StyleSheet, View, TextInput } from "react-native";
import { Icon } from '@rneui/themed';


export default function InputForm({nameIcon, typeIcon, placeholder, keyboardType, value, setValue}){
    return (
        <View style={styles.inputContainer}>
            <Icon style={styles.inputLeftIcon} name={nameIcon} type={typeIcon} color='#323232' size={16} />

            <TextInput placeholder={placeholder} style={styles.input} 
                placeholderTextColor="#A1A1A1"
                numberOfLines={1}
                returnKeyType='next'
                keyboardType={keyboardType}
                value={value}
                onChangeText={setValue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
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
      marginTop: 20,
      fontWeight: 'normal'
    },
  
    inputLeftIcon: {
      marginTop: -1,
      marginLeft: 5
    },
  
    input: {
      flex: 1,
      fontSize: 14,
      marginLeft: 5
    }
});