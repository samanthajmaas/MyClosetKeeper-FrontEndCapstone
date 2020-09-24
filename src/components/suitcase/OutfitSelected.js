import React, { useContext } from "react"
import { SuitcasesOutfitsContext } from "./SuitcasesOutfitsProvider"
import "./Suitcase.css"

export const OutfitSelected = (props) => {
    const { deleteSuitcasesOutfits } = useContext(SuitcasesOutfitsContext)

    return (
        <>
            <img src={props.selected.image} style={{ width: "100px" }}/>
            <div className="suitcase__outfitSelected">
                {props.selected.event}
            </div>

            <button className="deleteOutfitRelationships" onClick={() => {
                deleteSuitcasesOutfits(props.selected.relationshipId)
            }}>x
            </button>
            <br></br>
        </>
    )
}