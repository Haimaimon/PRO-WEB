/*import axios from "axios";
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({})

export function UserContextProvider({children}){
   const [user, setUser] = useState(null);
   useEffect(() => {
    if(!user){
        axios.get('/profile').then(({data}) => {
            setUser(data)
        })
    }
  },[])
    return (
        <UserContext.Provider value={user , setUser}>
            {children}
        </UserContext.Provider>
    )
}
*/

import axios from "axios";
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
            })
        }
    }, [user]); //  Include 'user' in the dependency array to trigger effect when 'user' changes

    const contextValue = { user, setUser }; // Creating an object to hold both user and setUser

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}