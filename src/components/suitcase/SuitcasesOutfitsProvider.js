import React, {useState} from "react"
import { SuitcasesClosetItemsContext } from "./SuitcasesClosetItemsProvider"

export const SuitcasesOutfitsContext = React.createContext()

export const SuitcasesOutfitsProvider = (props)=> {
    const [suitcasesOutfits, setSuitcasesOutfits] = useState([])

    const getSuitcasesOutfits = () => {
        return fetch ("http://localhost:8088/outfitsSuitcases")
            .then(res => res.json())
            .then(setSuitcasesOutfits)
    }

    const addSuitcasesOutfits = (suitcaseOutfit) => {
        return fetch(`http://localhost:8088/outfitsSuitcases`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(suitcaseOutfit)
        })
            .then(getSuitcasesOutfits)
    }

    const deleteSuitcasesOutfits = (suitcaseOutfitId) => {
        return fetch(`http://localhost:8088/outfitsSuitcases/${suitcaseOutfitId}`, {
            method: "DELETE"
        })
        .then(getSuitcasesOutfits)
    }

    const updateSuitcasesOutfits = suitcaseOutfit => {
        return fetch(`http://localhost:8088/outfitsSuitcases/${suitcaseOutfit.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(suitcaseOutfit)
        })
            .then(getSuitcasesOutfits)
    }

    return (
        <SuitcasesOutfitsContext.Provider value= {{
            suitcasesOutfits, getSuitcasesOutfits, addSuitcasesOutfits, updateSuitcasesOutfits, deleteSuitcasesOutfits
        }}>
            {props.children}
        </SuitcasesOutfitsContext.Provider>
    )
    
}