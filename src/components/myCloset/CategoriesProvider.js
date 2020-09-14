import React, {useState} from "react"

export const CategoriesContext = React.createContext()

export const CategoriesProvider = (props)=> {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch ("http://localhost:8088/categories")
            .then(res => res.json())
            .then(setCategories)
    }

    return (
        <CategoriesContext.Provider value= {{
            categories, getCategories
        }}>
            {props.children}
        </CategoriesContext.Provider>
    )
    
}