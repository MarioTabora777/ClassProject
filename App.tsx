import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './source/components/CustomButton';



//solo se puede retorar un componente,
export default function App() {
  const handleOnLogin =() => {
console.log('Log In...')
alert('Log In from app')
  } 

   const handleOnLogOut =() => {
console.log('Log out ...') 
alert('Log out from app')


  }
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
      <CustomButton title='Log In ...' onClick={handleOnLogin}></CustomButton> 
      <CustomButton title='Log out ...' onClick={handleOnLogOut}></CustomButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
