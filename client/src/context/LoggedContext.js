import { createContext,useState } from 'react';

export const LoggedContext = createContext();

export const LoggedProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            if (userData.token) {
                return true;
            } else {
                return false;
            }
        } 

        return false;
    });

    const contextValues = {
        isLogged,
        setIsLogged,
    };

    return (
        <>
            <LoggedContext.Provider value={contextValues}>
                {children}
            </LoggedContext.Provider>
        </>
    );
};
