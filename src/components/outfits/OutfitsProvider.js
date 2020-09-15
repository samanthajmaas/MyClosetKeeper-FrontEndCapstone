import React, { useState } from "react"

export const OutfitsContext = React.createContext()

export const OutfitsProvider = (props) => {
    const [outfits, setOutfits] = useState([])

    const getOutfits = () => {
        return fetch("http://localhost:8088/outfits")
            .then(res => res.json())
            .then(setOutfits)
    }

    const addOutfits = (outfit) => {
        return fetch(`http://localhost:8088/outfits`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(outfit)
        })
            .then(res => res.json())
            .then((outfit) => {
                getOutfits()
                return outfit
            })
    }

    const deleteOutfit = (outfitId) => {
        return fetch(`http://localhost:8088/outfits/${outfitId}`, {
            method: "DELETE"
        })
            .then(getOutfits)
    }

    const updateOutfit = outfit => {
        return fetch(`http://localhost:8088/outfits/${outfit.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(outfit)
        })
            .then(getOutfits)
    }

    return (
        <OutfitsContext.Provider value={{
            outfits, getOutfits, addOutfits, deleteOutfit, updateOutfit
        }}>
            {props.children}
        </OutfitsContext.Provider>
    )
}