import React, { useContext } from "react"
import { SuitcasesClosetItemsContext } from "./SuitcasesClosetItemsProvider"

export const ClosetItemSelected = (props) => {
    const { deleteSuitcasesClosetItems } = useContext(SuitcasesClosetItemsContext)

    return (
        <>
            <div className="suitcase__closetItems">
                {props.selected.type}
            </div>

            <button onClick={() => {
                deleteSuitcasesClosetItems(props.selected.relationshipId)
            }}>x
            </button>
        </>
    )
}