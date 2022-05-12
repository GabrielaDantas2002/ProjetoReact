import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Listagem({ data }) {
    return (
        <View style={style.container}>
            <Text style={style.text}>Produto:{data.nome}</Text>
            <Text style={style.text}>Marca:{data.nome}</Text>
            <Text style={style.text}>Valor: R${data.nome}</Text>
            <Text style={style.text}>Cor:{data.nome}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#121212',
    },
    text:{
        color: '#FFF',
        fontSize: 17,
    }
});