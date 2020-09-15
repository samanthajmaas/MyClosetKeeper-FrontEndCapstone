import React, { useContext, useEffect } from "react"
import { OutfitsContext } from "./OutfitsProvider"
import { MyClosetContext } from "../myCloset/MyClosetProvider"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"
import { Outfit } from "./Outfit"


export const OutfitsList = (props) => {
    const { outfits, getOutfits } = useContext(OutfitsContext)
    const { closetItems, getClosetItems } = useContext(MyClosetContext)
    const { clothingItemOutfits, getClothingItemsOutfits } = useContext(ClothingItemsOutfitsContext)

    useEffect(() => {
        getOutfits()
        getClosetItems()
        getClothingItemsOutfits()
    }, [])

    return (
        <>
        <div className="outfits">
                <h2>Outfits</h2>
                <button onClick={() => props.history.push("/outfits/create")}>
                    +Outfit
                </button>
                {
                    outfits.map(outfit => {
                        const relationships = clothingItemOutfits.filter(co => co.outfitId === outfit.id)
                        const findClothingItems = relationships.map(ci => {
                            return closetItems.find(closetItem => closetItem.id === ci.closetItemId)
                        })

                        return <Outfit key={outfit.id} outfit={outfit} closetItems={closetItems} findClothingItems={findClothingItems} {...props} />
                    })
                }
            </div>
        </>
    )
}
