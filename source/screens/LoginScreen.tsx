import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Screen } from "react-native-screens";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton'; 
import { userAuth ,AuthProvider} from "../../source/context/AuthContext"; 
import { userLanguage , i18n} from "../../source/context/LanguageContext";


 

export default function LoginScreen({navigation}: any ) {



  const handleOnLogin = () => {
        const alloweed = login(email , password) ;   
      

            try { 
              if(alloweed) { 

                    navigation.navigate('Home') 
                      alert('Bienvenido a la pantalla de Home con el email: ' + email)
                  } 
                  else { 
                      alert('El correo debe terminar en .edu: ' + email)

                  }

            }
          
            catch(error : any) { alert(error)}
 
  }

  
   const [email , setTextValue] = useState("");  
   const [password , setNumValue] = useState("");  
   const { isAllowed, login } = userAuth()
 
  const handleOnLogOut = () => {
    alert('testing log out ...  ')
  } 


    const handleOnInformation = () => {
    console.log('Information button pressed ...')
    alert('Log out from app')
  } 

   
 return (
  <View style={styles.container}> 
    <View style={styles.card}>
      {/* <Text>{{i8}}<Text/> */}
        <View style={styles.buttonsWrapper}>
          <CustomButton title="Log In ..." onClick={handleOnLogin} />
          <CustomButton  title="Log out ..."   onClick={handleOnLogOut} variant="secondary" /> 
          <CustomButton  title="Information ..."   onClick={handleOnInformation} variant="tertiary" />

          <CustomInput placeholder={i18n.t('enterEmail')} value = {email} onChange={setTextValue} typeInput={'email'}></CustomInput> 

          <CustomInput placeholder='Ingrese Número' value = {password} onChange={setNumValue} typeInput={'numeric'}></CustomInput>

        </View>
  </View>


  </View>
  
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf5f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
   card: {
      height: "80%" , 
      width: "80%",
      borderRadius: 15 , 
      backgroundColor: "white"

   },
  buttonsWrapper: {
    backgroundColor: '#b6cacf', 
    marginTop: 15 , 

    alignItems: "center" , 
    justifyContent: "space-around"

  }
});