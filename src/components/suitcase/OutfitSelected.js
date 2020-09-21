import React, { useContext } from "react"
import { SuitcasesOutfitsContext } from "./SuitcasesOutfitsProvider"

export const OutfitSelected = (props) => {
    const { deleteSuitcasesOutfits } = useContext(SuitcasesOutfitsContext)

    return (
        <>
            <div className="suitcase__outfitSelected">
                {props.selected.event}
            </div>

            <button onClick={() => {
                deleteSuitcasesOutfits(props.selected.relationshipId)
            }}>x
            </button>
        </>
    )
}