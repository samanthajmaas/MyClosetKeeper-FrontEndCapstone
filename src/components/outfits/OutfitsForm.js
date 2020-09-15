import React, { useContext, useState, useEffect } from "react"
import MultiSelect from "react-multi-select-component"
import { OutfitsContext } from "./OutfitsProvider"
import { MyClosetContext } from "../myCloset/MyClosetProvider"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"

export const NewOutfitForm = (props) => {
    const { outfits, addOutfits, updateOutfit, getOutfits } = useContext(OutfitsContext)
    const { clothingItemOutfits, getClothingItemsOutfits, addClothingItemsOutfits, updateClothingItemsOutfits } = useContext(ClothingItemsOutfitsContext)
    const { closetItems, getClosetItems } = useContext(MyClosetContext)

    const [outfit, setOutfit] = useState({})
    const [closetItem] = useState({})
    const [clothingItemOutfit, setClothingItemOutfit] = useState({})

    const editMode = props.match.params.hasOwnProperty("outfitId")

    const handleControlledInputChange = (broswerEvent) => {
        const newOutfit = Object.assign({}, outfit)
        const newClothingItemOutfit = Object.assign({}, clothingItemOutfit)
        newClothingItemOutfit[broswerEvent.target.name] = broswerEvent.target.value
        newOutfit[broswerEvent.target.name] = broswerEvent.target.value
        setOutfit(newOutfit)
        setClothingItemOutfit(newClothingItemOutfit)
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
        getClosetItems()
        getClothingItemsOutfits()
    }, [])

    useEffect(() => {
        getOutfitInEditMode()
    }, [outfits, clothingItemOutfits, closetItems])


    const cosntructNewOutfit = () => {
        const closetItemId = parseInt(clothingItemOutfit.closetItemId)

        if (editMode) {
            updateOutfit({
                id: outfit.id,
                event: outfit.event,
                userId: parseInt(localStorage.getItem("closet__user"))
            })
            updateClothingItemsOutfits({
                id: closetItem.id,
                closetItemId: closetItemId,
                outfitId: 1
            })

                .then(() => props.history.push(`/outfits`))
        } else {
            addOutfits({
                event: outfit.event,
                userId: parseInt(localStorage.getItem("closet__user"))
            })
                .then((outfitObj) => {
                    addClothingItemsOutfits({
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
                <fieldset>
                    <div className="form-group">
                        <MultiSelect
                            name="closetItemId"
                            proptype="int"
                            options={closetItems.map(closetItem => (
                                closetItem.type
                            ))
                            }
                            value={clothingItemOutfit.closetItemId}
                            onChange={handleControlledInputChange}
                            labelledBy={"Select a clothing item..."}
                        />
                    </div>
                </fieldset>
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
                        cosntructNewOutfit()
                    }}
                    className="btn btn-primary">
                    {editMode ? "Save" : "Save"}
                </button>
            </form>
        </>
    )
}

