import React, { useContext } from "react"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"
import "./Outfit.css"

export const ClothingItemSelected = (props) => {
    const { deleteClothingItemsOutfits } = useContext(ClothingItemsOutfitsContext)

    return (
        <>
            <img src={props.selected.image} style={{ width: "100px" }}/>
            <section>
                
            </section>
            <button className=" deleteOutfitRelationshipsButton" onClick={() => {
                deleteClothingItemsOutfits(props.selected.relationshipId)
            }}>x
            </button>
           <br></br>
        </>
    )
}