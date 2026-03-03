
import { View , Text, TouchableOpacity} from "react-native";



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "./ProfileScreen";
import InformationScreen from "./InformationScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack"; 
import { RouteStackParamsList } from "../navigation/StackNavigator";  
import SettingsScreen from "./SettingsScreen";
import { Button } from "react-native";
import { userLanguage,i18n } from "../context/LanguageContext";




const Tab = createBottomTabNavigator<TabsParamList>(); 
    

export type TabsParamList = {  

 Profile : undefined    
 InformationScreen : undefined ,   
 SettingsScreen :   {SetingValue : string } ,
}  
 

const HomeScreen = ( ) => { 

    const {changeLanguage , language} = userLanguage() ;
    
    return (
        // <Tab.Navigator>   
        //     <Tab.Screen name="Profile" component={ProfileScreen} />     
        //     <Tab.Screen name="InformationScreen" component={InformationScreen} />    
        //     <Tab.Screen name="SettingsScreen" component={SettingsScreen} />     

      
        // </Tab.Navigator>  

        <View> 
           <Text>i{i18n.t('welcome')} </Text>
           <Text>Tu idioma actual es:  {language} </Text>

           <Button title = "EN" onPress = {()=> changeLanguage('en')}></Button> 
           <Button title = "ES" onPress = {()=> changeLanguage('es')}></Button>
           <Button title = "DE" onPress = {()=> changeLanguage('de')}></Button>
           <Button title = "FR" onPress = {()=> changeLanguage('fr')}></Button>



        </View>
       
) } 


export default HomeScreen;  