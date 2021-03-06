import React, { useContext } from "react"
import { SuitcasesClosetItemsContext } from "./SuitcasesClosetItemsProvider"
import "./Suitcase.css"

export const ClosetItemSelected = (props) => {
    const { deleteSuitcasesClosetItems } = useContext(SuitcasesClosetItemsContext)

    return (
        <>
            <img src={props.selected.image} style={{ width: "100px" }}/>
            <section>
            </section>
            <button className="deleteRelationships" onClick={() => {
                deleteSuitcasesClosetItems(props.selected.relationshipId)
            }}>x
            </button>
            <br></br>
        </>
    )
}