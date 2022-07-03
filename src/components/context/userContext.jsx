import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
    
    const [user, setUser] = useState("")
    const values = {user, setUser}
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

const useUser = () => useContext(UserContext)

export {useUser, UserProvider}