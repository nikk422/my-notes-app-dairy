import {useContext,createContext , useState} from "react";


const AuthContext=createContext()

const AuthProvider=({children})=>{
    const [Login, setLogin]=useState(false);
    return(
        <AuthContext.Provider value={{Login, setLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>useContext(AuthContext);

export {useAuth , AuthProvider};