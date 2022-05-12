import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Image, FlatList, ActivityIndicator } from 'react-native';
import firebase from '../../services/conectionFirebase';
import Listagem from '../Listar/listagem';

 
console.disableYellowBox = true;
 
export default function App() {
  const [nome_produto, setNome] = useState('');
  const [estado_de_uso, setMarca] = useState('');
  const [preco_produto, setValor] = useState('');
  const [telefone_contato, setCor] = useState('');
 
  useEffect(() => {
 
    async function dados() {

      await firebase.database().ref('produtos').on('value', (snapshot) => {
        setProdutos([]);

        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            nome: chilItem.val().nome,
            marca: chilItem.val().marca,
            valor: chilItem.val().valor,
            cor: chilItem.val().cor,
          };

          setProdutos(oldArray => [...oldArray, data].reverse());
        })

        setLoading(false);

      })

    }

    dados();


  }, []);

 
  async function cadastrar() {
    if (nome !== '' & marca !== '' & valor !== '' & cor !== '') {
      let produtos = await firebase.database().ref('produtos');
      let chave = produtos.push().key;
 
      produtos.child(chave).set({
        nome_produto: nome_produto,
        estado_de_uso: estado_de_uso,
        preco_produto: preco_produto,
        telefone_contato: telefone_contato
      });
 
      alert('Produto Cadastrado!');
      setNome_produto('');
      setEstado_de_uso('');
      setPreco_produto('');
      setTelefone_contato('');
    }
    else {
      if (nome == '') {
        alert('Nome do Produto deve ser preeenchido!');
      }
    }
  }
  
 
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome do Produto</Text>
      <TextInput
        maxLength={60}
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setNome_produto(texto)}
        value={nome_produto}
      />
     
     <Text style={styles.texto}>Estado de Uso</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEstado_de_uso(texto)}
        value={estado_de_uso}
      />
 
      <Text style={styles.texto}>Preço do Produto</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setPreco_produto(texto)}
        value={preco_produto}
      />
 
      <Text style={styles.texto}>Telefone para Contato</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setTelefone_contato(texto)}
        value={telefone_contato}
      />
 
      <Button
        title="Cadastrar"
        color="#841584"
        onPress={cadastrar}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
 
  texto: {
    fontSize: 15,
  },
 
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 30,
    fontSize: 15,
    borderRadius: 10
  },
 
  icon: {
    position: 'absolute',
    right: 10,
  }
});