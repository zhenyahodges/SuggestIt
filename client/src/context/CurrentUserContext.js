import { createContext, useEffect, useState } from 'react';

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('Guest');

    const userData = JSON.parse(localStorage.getItem('user'));
    console.log(userData);

    useEffect(() => {
        if (userData) {
            // let email = userData.email;
            // email ? setCurrentUser(email) : setCurrentUser('Guest');
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
