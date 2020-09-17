import React, {useState} from "react"

export const ClothingItemsOutfitsContext = React.createContext()

export const ClothingItemsOutfitsProvider = (props)=> {
    const [clothingItemOutfits, setClothingItemsOutfits] = useState([])

    const getClothingItemsOutfits = () => {
        return fetch ("http://localhost:8088/clothingItemsOutfits")
            .then(res => res.json())
            .then(setClothingItemsOutfits)
    }

    const addClothingItemsOutfits = (clothingItemOutfit) => {
        return fetch(`http://localhost:8088/clothingItemsOutfits`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clothingItemOutfit)
        })
            .then(getClothingItemsOutfits)
    }

    const deleteClothingItemsOutfits = (clothingItemOutfitId) => {
        return fetch(`http://localhost:8088/clothingItemsOutfits/${clothingItemOutfitId}`, {
            method: "DELETE"
        })
        .then(getClothingItemsOutfits)
    }

    const updateClothingItemsOutfits = clothingItemOutfit => {
        return fetch(`http://localhost:8088/clothingItemsOutfits/${clothingItemOutfit.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clothingItemOutfit)
        })
            .then(getClothingItemsOutfits)
    }

    return (
        <ClothingItemsOutfitsContext.Provider value= {{
            clothingItemOutfits, getClothingItemsOutfits, addClothingItemsOutfits, updateClothingItemsOutfits, deleteClothingItemsOutfits
        }}>
            {props.children}
        </ClothingItemsOutfitsContext.Provider>
    )
    
}