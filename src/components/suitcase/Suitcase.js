import React, { useContext } from "react"
import { SuitcaseContext } from "./SuitcaseProvider"

export const Suitcase = (props) => {
    const { deleteSuitcase } = useContext(SuitcaseContext)

    return (
        <section className="suitcase">
            {/* <img src={props.outfit.image} style={{width: "100px"}}/> */}
            <div className="suitcase__tripName">{props.suitcase.tripName}</div>
            <div className="suitcase__outfits">
                {
                    props.findOutfits.map(outfit => {
                        return (<li>{outfit.image}</li>)
                    })

                }
            </div>
            <div className="suitcase__closetItems">
                {
                    props.findClosetItems.map(closetItem => {
                        return (<li>{closetItem.image}</li>)
                    })

                }
            </div>
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
            <button onClick={() => {
                props.history.push(`/outfits/edit/${props.suitcase.id}`)
            }}>Edit</button>
        </section>
    )
}