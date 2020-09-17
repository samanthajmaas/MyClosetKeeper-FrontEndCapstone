import React, { useContext, useEffect, useState } from "react"
import { MyClosetContext } from "../myCloset/MyClosetProvider"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"
import { ClothingItemSelected } from "./ClothingItemsSelected"
import { OutfitsContext } from "./OutfitsProvider"

export const ClothingItemSelector = (props) => {
    const { getClothingItemsOutfits, addClothingItemsOutfits, deleteClothingItemsOutfits } = useContext(ClothingItemsOutfitsContext)
    const { closetItems, getClosetItems } = useContext(MyClosetContext)
    const { outfits, getOutfits } = useContext(OutfitsContext)

    const [closetItem] = useState({})
    const [clothingItemOutfit, setClothingItemOutfit] = useState({})


    const handleControlledInputChange = (broswerEvent) => {
        const selectedClothingItem = Object.assign({}, closetItem)
        selectedClothingItem[broswerEvent.target.name] = broswerEvent.target.value
        setClothingItemOutfit(selectedClothingItem)
    }

    useEffect(() => {
        getClosetItems()
        getClothingItemsOutfits()
    }, [])

    useEffect(() => {
        getOutfits()
    }, [])

    const constructNewRelationship = () => {
        const closetItemId = parseInt(clothingItemOutfit.closetItemId)
        const getOutfitId = outfits.find(outfit => outfit.id === outfits.length)
        
        addClothingItemsOutfits({
            closetItemId: closetItemId,
            outfitId: getOutfitId.id
        })
    }

    return (
        <>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="closetItemId">Add a Clothing Item:</label>
                    <select name="closetItemId" className="form-control"
                        proptype="int"
                        value={clothingItemOutfit.closetItemId}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select a clothing item...</option>
                        {closetItems.map(closetItem => (
                            <option key={closetItem.id} value={closetItem.id}>
                                {closetItem.type}
                            </option>
                        ))
                        }
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewRelationship()
                }}
                className="btn btn-primary">
                {"Save"}
            </button>
            <div>


                {/* This is where I need to render the list of clothing items the user has selected!! */}
                <button onClick={() => {
                    deleteClothingItemsOutfits(props.clothingItemsOutfit.clothingItemId)
                }}>x
                    </button>


            </div>
        </>



    )
}
