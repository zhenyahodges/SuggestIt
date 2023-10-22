import { createContext, useEffect, useState } from 'react';

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('Guest');
    const userData = JSON.parse(localStorage.getItem('user'));
    const[currentUserId,setCurrentUserId] = useState('');
    const[currentToken,setCurrentToken] = useState('');
    const [isLogged, setIsLogged]=useState(false);

    useEffect(() => {
        if (userData) {
            setCurrentUser(userData.email);
            setCurrentUserId(userData.userId);
            setCurrentToken(userData.token);
            setIsLogged(true);
        } else {
            setCurrentUser('Guest');
            setCurrentToken('');

        }
    }, [setCurrentUser, userData]);

    const contextValues = {
        currentUser,
        currentUserId,
        currentToken,
        isLogged,
        setCurrentUser,
        setCurrentToken,
        setCurrentUserId,
        setIsLogged
    };

    return (
        <>
            <CurrentUserContext.Provider value={contextValues}>
                {children}
            </CurrentUserContext.Provider>
        </>
    );
};
