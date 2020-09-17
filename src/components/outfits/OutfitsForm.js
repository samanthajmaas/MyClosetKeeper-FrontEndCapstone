import React, { useContext, useState, useEffect } from "react"
import { OutfitsContext } from "./OutfitsProvider"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"
import { ClothingItemSelector } from "./ClothingItemSelectorForForm"

export const NewOutfitForm = (props) => {
    const { outfits, updateOutfit, getOutfits } = useContext(OutfitsContext)
    const { clothingItemOutfits, getClothingItemsOutfits } = useContext(ClothingItemsOutfitsContext)

    const [outfit, setOutfit] = useState({})
    const [closetItem, setClosetItem] = useState({})
    const [clothingItemOutfit, setClothingItemOutfit] = useState({})


    const handleControlledInputChange = (broswerEvent) => {
        const newOutfit = Object.assign({}, outfit)
        newOutfit[broswerEvent.target.name] = broswerEvent.target.value
        setOutfit(newOutfit)
    }

    const getOutfitToSave = () => {
            const outfitId = parseInt(props.match.params.outfitId)
            const selectedOutfit = outfits.find(a => a.id === outfitId) || {}
            const matchingRelationships = clothingItemOutfits.map(relationship => relationship.outfitId === outfitId) || {}
            setOutfit(selectedOutfit)
            setClothingItemOutfit(matchingRelationships)
    }

    useEffect(() => {
        getOutfits()
        getClothingItemsOutfits()
    }, [])

    useEffect(() => {
        getOutfitToSave()
    }, [outfits, clothingItemOutfits])


    const saveOutfitWithEvent = () => {
        
        updateOutfit({
            id: outfit.id,
            event: outfit.event,
            userId: parseInt(localStorage.getItem("closet__user"))
        })
            .then(() => props.history.push(`/outfits`))
        }


        return (
            <>
                <form className="newOutfitForm">
                    <h2 className="newOutfitForm__title"> Add New Outfit</h2>
                    <ClothingItemSelector key={clothingItemOutfit.id} closetItem={closetItem} setClosetItem={setClosetItem} {...props} />
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
                        Save
                    </button>
                </form>
            </>
        )
    }

