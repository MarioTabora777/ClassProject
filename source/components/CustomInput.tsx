

import {StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export default function CustomInput(){ 
  
 return (

    //wrapper
    <View style={style.wrapper}>
        {/* input container */}
          <View style={style.wrapper}>
           <MaterialIcons name={"email"} size={20}  color={"black"}> </MaterialIcons>
           <TextInput placeholder="ingrese su email..."value="" onChangeText={() => {}}/>
            <Ionicons name ={"eye"} />

        
        </View>
        <Text>{"Email: "}</Text>
     </View>
         
  );
} ; 

const style = StyleSheet.create({

wrapper: {

    marginBottom: 10 ,
    alignItems : "center"
} 



}); 
