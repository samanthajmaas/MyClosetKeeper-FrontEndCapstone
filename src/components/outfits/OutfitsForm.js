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
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleControlledInputChange = (broswerEvent) => {
        const newOutfit = Object.assign({}, outfit)
        newOutfit[broswerEvent.target.name] = broswerEvent.target.value
        setOutfit(newOutfit)
    }

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'myClosetKeeper')
        setLoading(true)
        const res = await fetch(
            `	https://api.cloudinary.com/v1_1/dkzwttxez/image/upload`,
            {
                method: "POST",
                body: data
            }
        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
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
            image: image,
            event: outfit.event,
            userId: parseInt(localStorage.getItem("closet__user"))
        })
            .then(() => props.history.push(`/outfits`))
    }


    return (
        <>
            <form className="newOutfitForm">
                <h2 className="newOutfitForm__title">{props.edit ? "Update Outfit" : "Add New Outfit"}</h2>
                <ClothingItemSelector key={clothingItemOutfit.id} closetItem={closetItem} setClosetItem={setClosetItem} {...props} />
                <fieldset>
                    <input className="outfit__image"
                        type="file"
                        name="file"
                        placeholder="Upload an image"
                        onChange={uploadImage}
                    />
                    {loading ? (
                        <div> Loading... </div>
                    ) : (
                            <img src={image} style={{ width: "100px" }} />
                        )}
                    <br></br>
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

