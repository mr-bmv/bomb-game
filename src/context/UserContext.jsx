import React, { useState } from 'react';
import { useContext } from 'react';

const UserContext = React.createContext()

export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        login: '',
        time: ''
    })

    // const onHandlerButton = () => {
    //     setField(
    //         {
    //             ...field,
    //             ...{ finishedGame: true }
    //         }
    //     )
    // }

    const setLogin = (login) => {
        setUser({ ...user, ...{ login } })
    }

    return (
        <UserContext.Provider value={{
            user,
            setLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;