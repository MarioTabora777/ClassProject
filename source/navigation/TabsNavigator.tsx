import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'; 
import ProfileScreen from '../screens/ProfileScreen';
import InformationScreen from '../screens/InformationScreen';

export type TabsParamList = {  
 Home: {email:string }, 
 Profile : undefined    
 InformationScreen : undefined ,   
 SettingsScreen :   {SetingValue : string } ,
    
}  

const Tab = createBottomTabNavigator<TabsParamList>();  

const Tabnavigator = () => {
    return (
        <Tab.Navigator>   
            <Tab.Screen name="Home" component={HomeScreen} />   
            <Tab.Screen name="Profile" component={ProfileScreen} />     
            <Tab.Screen name="InformationScreen" component={InformationScreen} />     

        </Tab.Navigator>
) } 


export default Tabnavigator;    