
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native-web';
import {
  Text, StyleSheet, SafeAreaView,
  TextInput, TouchableOpacity
} from 'react-native';
import firebase from '../../services/conectionFirebase';


export default function Login({ changeStatus }) {
  const [type, setType] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {

    if (type === 'login') {
      // Aqui fazemos o login
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        })
        .catch((err) => {
          console.log(err);
          alert('E-mail ou Senha incorreto(s)');
          return;
        })

    } else {
      // Aqui cadastramos o usuario 
      const user = firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        })
        .catch((err) => {
          console.log(err);
          alert('Não da pra cadastrar não... pq? não sei');
          return;
        })
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <TextInput
        placeholder="Seu email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder="Sua senha"
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity
        style={[styles.handleLogin,
        { backgroundColor: type === 'login' ? '#3ea6f2' : '#141414' }]}
        onPress={handleLogin}

      >
        <View>
        
            <Text style={styles.loginText}>
            <AntDesign name="check" size={24} color="white" />
              {type === 'login' ? 'Acessar' : 'Cadastrar'}

            </Text>
            </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')} >
        <Text style={{ textAlign: 'center' }}>
          {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F2f6fc',
    paddingHorizontal: 10,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh'
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414'
  },
  handleLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginBottom: 10,
  },
  loginText: {
    color: '#FFF',
    fontSize: 17,
  }
})