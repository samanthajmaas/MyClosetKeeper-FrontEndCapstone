import React, { useContext } from "react"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"
import "./Outfit.css"

export const ClothingItemSelected = (props) => {
    const { deleteClothingItemsOutfits } = useContext(ClothingItemsOutfitsContext)

    return (
        <>
            <div className="outfit__clothingItemSelected">
                {props.selected.type}
            </div>

            <button onClick={() => {
                deleteClothingItemsOutfits(props.selected.relationshipId)
            }}>x
            </button>
        </>
    )
}