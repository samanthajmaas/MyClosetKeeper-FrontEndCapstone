import React, { useContext, useEffect } from "react"
import { OutfitsContext } from "./OutfitsProvider"
import { MyClosetContext } from "../myCloset/MyClosetProvider"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"
import { Outfit } from "./Outfit"
import "./Outfit.css"


export const OutfitsList = (props) => {
    const { outfits, getOutfits, addOutfits } = useContext(OutfitsContext)
    const { closetItems, getClosetItems } = useContext(MyClosetContext)
    const { clothingItemOutfits, getClothingItemsOutfits } = useContext(ClothingItemsOutfitsContext)


    useEffect(() => {
        getOutfits()
        getClosetItems()
        getClothingItemsOutfits()
    }, [])

    const filteredOutfits = outfits.filter(outfit => outfit.userId === parseInt(localStorage.getItem("closet__user"))) || {}

    const createNewOutfitObj = () => {
        addOutfits({
            event: "",
            userId: parseInt(localStorage.getItem("closet__user"))
        })
        .then((outfitObj) => props.history.push(`/outfits/${outfitObj.id}/create`))
    }

    return (
        <>
             <button className = "addOutfitButton"onClick={() => {
                    createNewOutfitObj()
                }}>
                    +Outfit
                </button>
            <section className="outfits">
                <h2 className="outfitsHeader">Outfits</h2>
                
                {
                    filteredOutfits.map(outfit => {
                        const relationships = clothingItemOutfits.filter(co => co.outfitId === outfit.id)
                        const findClothingItems = relationships.map(ci => {
                            return closetItems.find(closetItem => closetItem.id === ci.closetItemId)
                        })

                        return <Outfit key={outfit.id} outfit={outfit} closetItems={closetItems} findClothingItems={findClothingItems} {...props} />
                    }).reverse()
                }
            </section>
        </>
    )
}
