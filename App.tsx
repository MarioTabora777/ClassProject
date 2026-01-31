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
    <View style={styles.card}>
        <View style={styles.buttonsWrapper}>
          <CustomButton title="Log In ..." onClick={handleOnLogin} />
          <CustomButton
            title="Log out ..."
            onClick={handleOnLogOut}
            variant="secondary"
          />
        </View>
  </View>


  </View>
  
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
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
    backgroundColor: 'pink', 
    marginTop: 15 , 

    alignItems: "center" , 
    justifyContent: "space-around"

  }
});
;






