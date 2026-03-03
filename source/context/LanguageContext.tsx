

import { Context, createContext, useContext, useEffect, useState } from "react";
import  AsyncStorage, { AsyncStorageError }  from "@react-native-async-storage/async-storage";
import { I18n } from "i18n-js";
import { LogBox } from "react-native";

type Language = 'es' | 'en' | 'de' | 'fr' ; 

type LanguajeContextType =  { 

    language: Language ;   
    changeLanguage : (lng : Language)=>void;
}; 


// paso 1 configuracion de libreria de traducciones paso 1: definición de diccionario c
const translations = { 
        en : {singIn: "Sing In" , welcome : 'Welcome', enterEmail : 'Please fill a email', exit : 'Exit'} ,  
        es : {singIn: "Iniciar sesión" , welcome : 'Bienvenido' , enterEmail : 'Por favor ingrese un email' , exit : 'Exit'} ,  
        de : {singIn: "Anmelden",  welcome : 'Wilkommen'} ,  
        fr : {singIn: "Connexion",  } , 
    


} 

//paso 2 instalcia de libreria de traducciones 
 const  i18n = new I18n(translations)

//paso 3 
i18n.defaultLocale = 'en' ; 
i18n.enableFallback = true; 


//definir contexto 
const LanguageContext = createContext<LanguajeContextType | null> (null); 

//utilizar el contexto 
export const userLanguage = () => { 

    const context = useContext(LanguageContext) ; 
     if (!context) { 
                throw new Error("useAuth debe usarse dentro de Authprovider");
        }
    return context

} 
 


export const LanguageProvider = ({children} : {children : React.ReactNode}) =>{ 
    const [language, setLanguage] = useState<Language>("es") 

useEffect(() => {
  const loadLanguage = async () => {
    const storedLanguage = await AsyncStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage as Language);
      i18n.locale = storedLanguage;
    } else {
      i18n.locale = i18n.defaultLocale;
    }
  };

  loadLanguage();
}, []);
    const changeLanguage =  async (lng: Language) => { 
            setLanguage(lng) ;
            i18n.locale = lng;
            await AsyncStorage.setItem("language" , lng)

    } 


    
        return (
                <LanguageContext.Provider value = {{language , changeLanguage}}> 
                     {children}

                </LanguageContext.Provider>
        )

} 

export {i18n}