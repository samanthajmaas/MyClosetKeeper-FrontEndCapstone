import React, {useState} from "react"

export const UsersContext = React.createContext()

export const UsersProvider = (props)=> {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch ("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUsers)
    }

    return (
        <UsersContext.Provider value= {{
            users, getUsers
        }}>
            {props.children}
        </UsersContext.Provider>
    )
    
}