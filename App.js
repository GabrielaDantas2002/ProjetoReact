
import  React, { useState } from 'react';
import { Button, View, StyleSheet, Text, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import Login from './src/components/login/login';
import Menu from './src/components/MenuTabs/menu';

import Squid from './Imagens/Squid.jpg';
import Carnivora from './Imagens/Canivora.jpg';
import Boca from './Imagens/Boca.jpg';

function HomeScreen({ navigation }) {
  return (
    <View style={{}}>
      <View style={{alignItems: 'center', }}>
      <Text>Oi amigues</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
        <Image source={require('./Imagens/Squid.jpg')} style={{ width: '30%', height: 220, marginLeft: 'auto', marginRight: 'auto', border: ' 3px solid lightblue' }} />
        <Image source={require('./Imagens/Canivora.jpg')} style={{ width: '30%', height: 220, marginLeft: 'auto', marginRight: 'auto', border: ' 3px solid lightblue' }} />
        <Image source={require('./Imagens/Boca.jpg')} style={{ width: '30%', height: 220, marginLeft: 'auto', marginRight: 'auto', border: ' 3px solid lightblue' }} />
        </View>
    </View>
  );
}
  
  function ProdutosScreen({ navigation }) {  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    );
  }

function LoginScreen({ navigation }) {
    const [user,setUser]= useState(null);
    if(!user){
      return <Login changeStatus={(user)=> setUser(user)}/>
      
    }
    return <Menu/>
  }
  
const Drawer = createDrawerNavigator();

export default function App() {
    return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={{
            drawerStyle:{
            backgroundColor:"white",
            width:240,
        },
        }}>

      <Drawer.Screen 
        options={{
            drawerIcon: config => <AntDesign name="home" size={24} color="black" />}}
        name="Home" component={HomeScreen} />

        <Drawer.Screen 
        options={{
            drawerIcon: config => <AntDesign name="login" size={24} color="black" />}}
        name="Login" component={LoginScreen} />
        
        <Drawer.Screen
        options={{
            drawerIcon: config=> <AntDesign name="inbox" size={24} color="black" />}}
        name="Produtos" component={ProdutosScreen} />
            
      </Drawer.Navigator>
    </NavigationContainer>
    );
}