import { createContext, useState } from 'react';
import { requireAuth } from '../utils/requireAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const {userId,token}=requireAuth();

    userId? setIsLogged(true): setIsLogged(false);
    token? setIsAuth(true): setIsAuth(false);
    
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
