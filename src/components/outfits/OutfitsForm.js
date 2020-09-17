import React, { useContext, useState, useEffect } from "react"
import { OutfitsContext } from "./OutfitsProvider"
import { MyClosetContext } from "../myCloset/MyClosetProvider"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"
import {ClothingItemSelector} from "./ClothingItemSelectorForForm"

export const NewOutfitForm = (props) => {
    const { outfits, addOutfits, updateOutfit, getOutfits } = useContext(OutfitsContext)
    const { clothingItemOutfits, getClothingItemsOutfits, addClothingItemsOutfits, updateClothingItemsOutfits } = useContext(ClothingItemsOutfitsContext)
    const { closetItems, getClosetItems } = useContext(MyClosetContext)

    const [outfit, setOutfit] = useState({})
    const[closetItem, setClosetItem] = useState({})
    const [clothingItemOutfit, setClothingItemOutfit] = useState({})

    const editMode = props.match.params.hasOwnProperty("outfitId")

    const handleControlledInputChange = (broswerEvent) => {
        const newOutfit = Object.assign({}, outfit)
        newOutfit[broswerEvent.target.name] = broswerEvent.target.value
        setOutfit(newOutfit)
    }

    const getOutfitInEditMode = () => {
        if (editMode) {
            const outfitId = parseInt(props.match.params.outfitId)
            const selectedOutfit = outfits.find(a => a.id === outfitId) || {}
            const matchingRelationships = clothingItemOutfits.map(relationship => relationship.outfitId === outfitId) || {}
            setOutfit(selectedOutfit)
            setClothingItemOutfit(matchingRelationships)
        }
    }

    useEffect(() => {
        getOutfits()
        getClothingItemsOutfits()
    }, [])

    useEffect(() => {
        getOutfitInEditMode()
    }, [outfits, clothingItemOutfits, closetItems])


    const saveOutfitWithEvent = () => {
        const closetItemId = parseInt(clothingItemOutfit.closetItemId)

        if (editMode) {
            updateOutfit({
                id: outfit.id,
                event: outfit.event,
                userId: parseInt(localStorage.getItem("closet__user"))
            })
                .then((outfit) => {
                    updateClothingItemsOutfits({
                        id: closetItem.id,
                        closetItemId: closetItemId,
                        outfitId: outfit.id
                    })
                })
                .then(() => props.history.push(`/outfits`))
        } else {
            updateOutfit({
                id: outfit.id,
                event: outfit.event,
                userId: parseInt(localStorage.getItem("closet__user"))
            })
                .then((outfitObj) => {
                    updateClothingItemsOutfits({
                        id: closetItem.id,
                        closetItemId: closetItemId,
                        outfitId: outfitObj.id
                    })
                })

                .then(() => props.history.push(`/outfits`))
        }
    }

    return (
        <>
            <form className="newOutfitForm">
                <h2 className="newOutfitForm__title">{editMode ? "Update Outfit" : "Add New Outfit"}</h2>
                <ClothingItemSelector key={clothingItemOutfit.id} {...props} />
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="event">Event: </label>
                        <textarea type="text" name="event" required autoFocus className="form-control"
                            proptype="varchar"
                            placeholder="Event Description"
                            defaultValue={outfit.event}
                            onChange={handleControlledInputChange}
                        ></textarea>
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        saveOutfitWithEvent()
                    }}
                    className="btn btn-primary">
                    {editMode ? "Save" : "Save"}
                </button>
            </form>
        </>
    )
}

