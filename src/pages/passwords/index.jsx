import { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage'

export function Passwords(){

    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const { getItem } = useStorage();

    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            console.log(passwords);
        }
        loadPasswords();
    },
    [focused])

    return(
        <SafeAreaView style={{flex:1,}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#392de9',
        paddingTop: 28,
        paddingBottom: 8,
        paddingLeft: 14,
        paddingRight: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 22,
        color: "#FFF",
        fontWeight: 'bold',
    }
})