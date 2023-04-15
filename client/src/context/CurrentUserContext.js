import { createContext, useContext, useEffect, useRef, useState } from 'react';

export const CurrentUserContext = createContext();

export function useWhoIsLooking() {
    return useContext(CurrentUserContext);
}

export const CurrentUserProvider = ({ children }) => {
    const [whoIsLooking, setWhoIsLooking] = useState('Guest');
    // const emaiLoggedUser=useRef();
    const userData = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        console.log(('USER-SURR---'+userData));
        if(userData){
           let email = userData.email;
        //    emaiLoggedUser=email;

        email ? setWhoIsLooking(email) : setWhoIsLooking('Guest');  
        }else{
            setWhoIsLooking('Guest');
        }
       
    }, [setWhoIsLooking]);

    const contextValues = {
        whoIsLooking,
        setWhoIsLooking,
        // emaiLoggedUser
    };

    return (
        <>
            <CurrentUserContext.Provider value={contextValues}>
                {children}
            </CurrentUserContext.Provider>
        </>
    );
};
