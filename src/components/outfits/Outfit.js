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
                    props.findClothingItems.map(clothingItem => {
                        return (<li>{clothingItem.type}</li>)
                    })

                }
            </div>


            <button onClick={
                () => {
                    // deleteOutfit(props.closetItem.id)
                    //     .then(() => {
                    //         props.history.push(`/myCloset`)
                    //     })
                }
            }>
                Delete
            </button>
            <button onClick={() => {
                // props.history.push(`/myCloset/edit/${props.closetItem.id}`)
            }}>Edit</button>
        </section>
    )
}