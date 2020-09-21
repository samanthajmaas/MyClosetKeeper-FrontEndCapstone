import React, { useContext } from "react"
import Popup from "reactjs-popup"
import { SuitcaseDetails } from "./SuitcaseDetails"
import { SuitcaseContext } from "./SuitcaseProvider"

export const Suitcase = (props) => {
    const { deleteSuitcase } = useContext(SuitcaseContext)

    return (
        <section className="suitcase">
            <div className="suitcase__tripName">{props.suitcase.tripName}</div>
            <img src={props.suitcase.image} style={{width: "100px"}}/>
            <Popup trigger={<button> View Suitcase </button>} position="center">
                <SuitcaseDetails key ={props.suitcase.id} suitcase={props.suitcase} outfits={props.outfits} closetItems={props.closetItems} findClosetItems={props.findClosetItems} findOutfits={props.findOutfits} {...props}/> 
            </Popup>
            <button onClick={
                () => {
                    deleteSuitcase(props.suitcase.id)
                        .then(() => {
                            props.history.push(`/suitcases`)
                        })
                }
            }>
                Delete
            </button>
        </section>
    )
}