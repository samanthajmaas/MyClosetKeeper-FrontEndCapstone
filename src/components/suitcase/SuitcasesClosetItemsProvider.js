import React, {useState} from "react"

export const SuitcasesClosetItemsContext = React.createContext()

export const SuitcasesClosetItemsProvider = (props)=> {
    const [suitcasesClosetItems, setSuitcasesClosetItems] = useState([])

    const getSuitcasesClosetItems = () => {
        return fetch ("http://localhost:8088/clothingItemsSuitcases")
            .then(res => res.json())
            .then(setSuitcasesClosetItems)
    }

    const addSuitcasesClosetItems = (suitcaseClosetItem) => {
        return fetch(`http://localhost:8088/clothingItemsSuitcases`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(suitcaseClosetItem)
        })
            .then(getSuitcasesClosetItems)
    }

    const deleteSuitcasesClosetItems = (suitcaseClosetItemId) => {
        return fetch(`http://localhost:8088/clothingItemsSuitcases/${suitcaseClosetItemId}`, {
            method: "DELETE"
        })
        .then(getSuitcasesClosetItems)
    }

    const updateSuitcasesClosetItems = suitcaseClosetItems => {
        return fetch(`http://localhost:8088/clothingItemsSuitcases/${suitcaseClosetItems.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(suitcaseClosetItems)
        })
            .then(getSuitcasesClosetItems)
    }

    return (
        <SuitcasesClosetItemsContext.Provider value= {{
            suitcasesClosetItems, getSuitcasesClosetItems, addSuitcasesClosetItems, deleteSuitcasesClosetItems, updateSuitcasesClosetItems
        }}>
            {props.children}
        </SuitcasesClosetItemsContext.Provider>
    )
    
}