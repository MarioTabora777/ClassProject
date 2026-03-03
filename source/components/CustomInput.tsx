

import {StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardTypeOptions} from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

interface Props {
    placeholder:string;
    value: string, 
    onChange: (text:string )=>void,
    typeInput : 'password' | 'email' | 'numeric' | 'password'  
    
}


export default function CustomInput({placeholder,value,onChange,typeInput}: Props){ 
    //uso de variables en el estado actual 
    //[nombrevariable,funcion]
     const [issecureText , setInSecureText] = useState(typeInput === 'password');  /*Use state recibe en el constructor 
                    ale                                            el valor inicial de la variable*/ 

                       
    const keyboardType:KeyboardTypeOptions = typeInput === 'email' ? 'email-address' : typeInput === 'numeric' ? 'numeric' : 'default'; 
const getError = () => {
    if(typeInput === 'email' && !value.includes('@')){
        return 'correo invalido';     
    } 
    if(typeInput === 'password' && value.length < 6){   
        return 'La contraseña debe ser más fuerte';
    }
} 

const error = getError();    

 return (
    //wrapper
    <View style={style.wrapper}>
        {/* input container */}
          <View style={[style.inputContainer,error && style.inputError]}>
           <MaterialIcons name={"lock"} size={20}  color={"black"}> </MaterialIcons>

           <TextInput placeholder={placeholder} value={value} 
            onChangeText={onChange} 
           secureTextEntry = {issecureText}
           keyboardType={keyboardType}
           />


            <Ionicons name ={"eye"} />

        
        </View>
        {error && <Text >{error}</Text>}
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
    }, 

    
    inputError: { 
        borderColor: 'red', 
        color: 'red',
    }
    
});
