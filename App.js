import React, { useEffect, useState } from "react";
import {Text,View,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowUserList from "./src/component/HomePage";
import ShowUserProfile from "./src/component/UserProfile";

const Stack = createNativeStackNavigator();
export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ShowUserList} />
        <Stack.Screen name="Profile" component={ShowUserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
