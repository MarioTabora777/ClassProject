import { Context, createContext, useContext, useState } from "react";

type User = { 
id? : string,
email : string,
token? : string,
}  | null

type AuthContextType = { 
    user: User ;
    isAllowed : boolean ;
    login : (email: string , password:string)=> boolean ;
    // register : (email: string , password:string)=>boolean ;
    logout : ()=>boolean;
} 

//*definir el contexto 
const AuthContext = createContext<AuthContextType | null> (null)

//utilizar el contexto , hook perzonalizado
export const userAuth = () => { 
        const context = useContext(AuthContext); 
        if (!context) { 
                throw new Error("useAuth debe usarse dentro de Authprovider");
        }
return context
} 

// definir modelo dle contexto 
// crear hook para que se ejecute 
//definir el provider 
// el context provider solo se puede usar en el app y no se puede utilizar en ningun otro lado 
export const AuthProvider = ({children} : {children : React.ReactNode})=> { 
  //investigar variables en el estado de un componente
  // que es el estado global  
  //definición de contexto 
  // libreria api xontext
  const [user, setUser] = useState<User>(null) ; 
  const [isAllowed, setIsAllowed] = useState<boolean>(false) ; 


const login = (email:string , password : string) =>{ 

    const allowed = email.endsWith('.edu') ; 
    if (allowed) { 
            setUser({email}) 

            setIsAllowed(allowed)

    }

    return allowed

} 

const logout =()=> { 
setUser(null) 
setIsAllowed(false)
    return false
} 
        return (
    <AuthContext.Provider value={{user,isAllowed, login ,logout}}>
      {children}
    </AuthContext.Provider>
                 );


        
}

