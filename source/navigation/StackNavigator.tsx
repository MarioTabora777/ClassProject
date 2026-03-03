
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";

import Tabnavigator from "./TabsNavigator";
import HomeScreen from "../screens/HomeScreen";


const stack = createNativeStackNavigator<RouteStackParamsList>();

export type RouteStackParamsList = {
  Login: undefined,
  Home: undefined,
  // TabNavigator : {email:string },   
} 



export default function StackNavigator() {
  return (

    <stack.Navigator initialRouteName={'Login'} screenOptions={{headerShown: true}}>
        <stack.Screen
        name="Login" 
        component={LoginScreen} 
        options={{title : "Inicio de sesión"}}
        /> 
       
   <stack.Screen
        name="Home" 
        component={HomeScreen} 
        /> 
        
    </stack.Navigator>
  );
}