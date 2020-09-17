import React, {useContext, useEffect} from "react"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"

export const ClothingItemSelected = (props) => {
    const {deleteClothingItemsOutfits} = useContext(ClothingItemsOutfitsContext)
    
    return(
    <>
        <div>{props.closetItem.type}</div>
        <button onClick={() => {
            deleteClothingItemsOutfits(props.clothingItemsOutfit.clothingItemId)}}>x
            </button>
    </>
)}