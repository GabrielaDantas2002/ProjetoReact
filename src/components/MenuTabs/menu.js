import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, SafeAreaView , TouchableOpacity } from 'react-native';
import Login from '../login/login'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Produtos from '../Produtos/produtos';


const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    );
  }
  
  function SobreScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Sobre!</Text>
      </View>
    );
  }

  function ListaScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Lista!</Text>
      </View>
    );
  }

  function ProdutoScreen() {
    return (
      <Produtos/>
    );
  }
  


export default function MenuTabs()
{
    return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Sobre') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Lista') {
              iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
            }else if(route.name === 'Home')
            {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
            }else if(route.name === 'Produto')
            {
                iconName = focused ? 'basket' : 'basket-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            
          },
          headerShown: false,
          tabBarActiveTintColor: "rgb(0, 150, 255)",
          tabBarInactiveTintColor: 'gray',
        })  
        }
      >
        
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Lista" component={ListaScreen} />
        <Tab.Screen name="Produto" component={ProdutoScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
      </Tab.Navigator>
    )
}