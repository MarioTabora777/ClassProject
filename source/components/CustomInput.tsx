

import {StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

interface Props {
    placeholder:string;
    value: string, 
    onChange: ()=>void,
    typeInput : 'password' | 'email' | 'numeric' | 'password' | 
    
}


export default function CustomInput({placeholder,value,onChange,typeInput}: Props){ 
    //uso de variables en el estado actual 
    //[nombrevariable,funcion]
     const [issecureText , setInSecureText] = useState(typeInput === 'password');  /*Use state recibe en el constructor 
                                                                el valor inicial de la variable*/


 return (

    //wrapper
    <View style={style.wrapper}>
        {/* input container */}
          <View style={style.inputContainer}>
           <MaterialIcons name={"lock"} size={20}  color={"black"}> </MaterialIcons>

           <TextInput placeholder={placeholder} value={value} 
           onChangeText={onChange} 
           secureTextEntry = {issecureText}
           />


            <Ionicons name ={"eye"} />

        
        </View>
        <Text>{"Password: "}</Text>
     </View>
         
  );
} ; 

const style = StyleSheet.create({
    wrapper:{
        marginBottom:10,
        width: "100%",
        paddingHorizontal: 25,
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 13,
    }
});
