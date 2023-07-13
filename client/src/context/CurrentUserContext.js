import { createContext, useEffect, useState } from 'react';

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('Guest');
    const userData = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (userData) {
            setCurrentUser(userData.email);
        } else {
            setCurrentUser('Guest');
        }
    }, [setCurrentUser, userData]);

    const contextValues = {
        currentUser,
        setCurrentUser,
    };

    return (
        <>
            <CurrentUserContext.Provider value={contextValues}>
                {children}
            </CurrentUserContext.Provider>
        </>
    );
};
