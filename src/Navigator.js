import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Online from './screen/Online';
import AddCart from './screen/AddCart';
import Payment from './screen/Payment';

const Stack= createStackNavigator();

const Navigator = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false,}}>
            <Stack.Screen  name="online" component={Online} />
            <Stack.Screen  name="add" component={AddCart} />
            <Stack.Screen  name="payment" component={Payment} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default Navigator

