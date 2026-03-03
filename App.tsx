import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './source/components/CustomButton';
import CustomInput from './source/components/CustomInput';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './source/navigation/StackNavigator';
import { userAuth ,AuthProvider} from "./source/context/AuthContext";
import {LanguageProvider} from "./source/context/LanguageContext";


//solo se puede retorar un componente,
export default function App() {
 


      return ( 
       <LanguageProvider>

       <AuthProvider>

              <NavigationContainer> 
                        <StackNavigator/>  
                      </NavigationContainer>
        </AuthProvider>
        </LanguageProvider>
       
      ); 
    


}
