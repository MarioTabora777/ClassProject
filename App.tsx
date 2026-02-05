import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './source/components/CustomButton';
import CustomInput from './source/components/CustomInput';



//solo se puede retorar un componente,
export default function App() {
  const handleOnLogin = () => {
    console.log('Log In...')
    alert('Log In from app')
  }

  const handleOnLogOut = () => {
    console.log('Log out ...')
    alert('This is a class project')
  } 


    const handleOnInformation = () => {
    console.log('Information button pressed ...')
    alert('Log out from app')
  }
 return (
  <View style={styles.container}> 
    <View style={styles.card}>
        <View style={styles.buttonsWrapper}>
          <CustomButton title="Log In ..." onClick={handleOnLogin} />
          <CustomButton  title="Log out ..."   onClick={handleOnLogOut} variant="secondary" /> 
          <CustomButton  title="Information ..."   onClick={handleOnLogOut} variant="tertiary" />
          <CustomInput placeholder='fdf' value = {''} onChange={() =>{}} typeInput={'password'}></CustomInput>
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
;






