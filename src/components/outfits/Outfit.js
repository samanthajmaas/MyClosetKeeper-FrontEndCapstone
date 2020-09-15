import React, { useContext } from "react"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"
import { OutfitsContext } from "./OutfitsProvider"

export const Outfit = (props) => {
    const { deleteOutfit } = useContext(OutfitsContext)

    return (
        <section className="outfit">
            {/* <img></img> */}
            <div className="outfit__event">{props.outfit.event}</div>
            <div className="outfit__clothingItem">
                {
                    props.findClothingItems.map(closetItem => {
                        return (<li>{closetItem.type}</li>)
                    })

                }
            </div>
            <button onClick={
                () => {
                    deleteOutfit(props.outfit.id)
                        .then(() => {
                            props.history.push(`/outfits`)
                        })
                }
            }>
                Delete
            </button>
            <button onClick={() => {
                props.history.push(`/outfits/edit/${props.outfit.id}`)
            }}>Edit</button>
        </section>
    )
}