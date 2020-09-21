import React, { useContext, useState } from "react"
// import { MyClosetContext } from "../myCloset/MyClosetProvider"
// import { OutfitsContext } from "../outfits/OutfitsProvider"
// import { SuitcaseContext } from "./SuitcaseProvider"

export const SuitcaseDetails = (props) => {
    // const {suitcases, getSuitcases} = useContext(SuitcaseContext)
    // const {outfits, getOutfits}= useContext(OutfitsContext)
    // const {closetItems, getClosetItems} = useContext(MyClosetContext)

    // const [suitcase, setSuitcase] = useState({})
    // const[outfit, setOutfit] = useState({})
    // const [closetItem, setClosetItem] = useState({})

    return (
        <>
            <div className="suitcase__tripName">{props.suitcase.tripName}</div>
            <div className="suitcase__outfits">
                {
                    props.findOutfits.map(outfit => {
                        return (<img src={outfit.image} style={{ width: "100px" }} />)
                    })

                }
            </div>
            <div className="suitcase__closetItems">
                {
                    props.findClosetItems.map(closetItem => {
                        return (<img src={closetItem.image} style={{ width: "100px" }} />)
                    })

                }
            </div>
            <div className="suitcase__description">{props.suitcase.description}</div>
            <button onClick={() => {
                props.history.push(`/suitcases/edit/${props.suitcase.id}`)
            }}>Edit</button>
        </>
    )
}