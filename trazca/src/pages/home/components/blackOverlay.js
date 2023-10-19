import { View, StyleSheet } from "react-native";


export function BlackOverlay(){
    return(
        <View style={styles.container}/>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 1,
        borderRadius: 4,
        //borderColor: '#A1A1A1',
    },
});