import { createContext, useContext, useEffect, useState } from 'react';
import { requireAuth } from '../utils/requireAuth';

export const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

useEffect(()=>{

const {userId,token}=requireAuth();
const result=requireAuth();
console.log(result);
userId? setIsLogged(true): setIsLogged(false);
token? setIsAuth(true): setIsAuth(false);

},[]);
    
    const contextValues={
       isLogged,
       setIsLogged,
        isAuth,
        setIsAuth
    };
    
    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};
