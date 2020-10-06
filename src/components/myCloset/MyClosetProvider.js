import React, { useState } from "react"

export const MyClosetContext = React.createContext()

export const MyClosetProvider = (props) => {
    const [closetItems, setClosetItems] = useState([])
    const [ searchTerms, setTerms ] = useState("")

    const getClosetItems = () => {
        return fetch("http://localhost:8088/closetItems")
            .then(res => res.json())
            .then(setClosetItems)
    }

    const addClosetItems = (closetItem) => {
        return fetch(`http://localhost:8088/closetItems`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(closetItem)
        })
            .then(getClosetItems)
    }

    const deleteClosetItem = closetItemId => {
        return fetch(`http://localhost:8088/closetItems/${closetItemId}`, {
            method: "DELETE"
        })
            .then(getClosetItems)
    }

    const updateClosetItem = closetItem => {
        return fetch(`http://localhost:8088/closetItems/${closetItem.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(closetItem)
        })
            .then(getClosetItems)
    }

    return (
        <MyClosetContext.Provider value={{
            closetItems, addClosetItems, getClosetItems, deleteClosetItem, updateClosetItem, searchTerms, setTerms
        }}>
            {props.children}
        </MyClosetContext.Provider>
    )

}