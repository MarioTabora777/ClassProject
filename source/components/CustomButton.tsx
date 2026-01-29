import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface CustomButtonProp {
title:string;
onClick: ()=>void

}

export default function CustomButton({title,onClick}:CustomButtonProp ){ 
 return (
    <View>
     <TouchableOpacity onPress={onClick} style ={style.container}>
          <Text>{title}</Text>
        </TouchableOpacity>
      
    </View>
  );
} ;

const style = StyleSheet.create({
  container : {

    backgroundColor: "#ebd8e1"

  }

});