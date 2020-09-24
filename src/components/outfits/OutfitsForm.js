import React, { useContext, useState, useEffect } from "react"
import { OutfitsContext } from "./OutfitsProvider"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"
import { ClothingItemSelector } from "./ClothingItemSelectorForForm"
import "./Outfit.css"
import { Button } from 'reactstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const NewOutfitForm = (props) => {
    const { outfits, updateOutfit, getOutfits, deleteOutfit } = useContext(OutfitsContext)
    const { clothingItemOutfits, getClothingItemsOutfits } = useContext(ClothingItemsOutfitsContext)

    const [outfit, setOutfit] = useState({})
    const [closetItem, setClosetItem] = useState({})
    const [clothingItemOutfit, setClothingItemOutfit] = useState({})
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
        console.log(image)
    }

    const getOutfitToSave = () => {
        const outfitId = parseInt(props.match.params.outfitId)
        const selectedOutfit = outfits.find(a => a.id === outfitId) || {}
        const matchingRelationships = clothingItemOutfits.map(relationship => relationship.outfitId === outfitId) || {}
        setOutfit(selectedOutfit)
        setImage(selectedOutfit.image)
        setClothingItemOutfit(matchingRelationships)
    }

    const update = () => {
        return updateOutfit({
            id: outfit.id,
            image: image,
            event: outfit.event,
            userId: parseInt(localStorage.getItem("closet__user"))
        })
    }

    useEffect(() => {
        getOutfits()
        getClothingItemsOutfits()
    }, [])

    useEffect(() => {
        getOutfitToSave()
    }, [outfits, clothingItemOutfits])

    useEffect(() => {
        update()
    }, [image])


    const saveOutfitWithEvent = () => {
        update().then(() => props.history.push(`/outfits`))
    }


    return (
        <>
            <Button
                onClick={evt => {
                    const outfitId = parseInt(props.match.params.outfitId)
                    deleteOutfit(outfitId).then(() => props.history.push(`/outfits`))
                }}
            >
                <ExitToAppIcon style={{ fontSize: 45 }} className="exitIcon" />
            </Button>
            <form className="newOutfitForm">
                <h2 className="newOutfitForm__title">{props.edit ? "Update Outfit" : "Add New Outfit"}</h2>
                {
                    loading ? (
                        <div className="loading"> Loading... </div>
                    ) : props.edit ?
                            <>
                                <Button onClick={toggle} className="styleUpload"> <label for="outfit__image" className="outfitImage">
                                    Upload an Image
                                </label></Button>
                                <input id="outfit__image"
                                    type="file"
                                    name="file"
                                    placeholder="Upload an image"
                                    onChange={uploadImage}
                                />
                                <img className="imagePreview" src={image} style={{ width: "100px" }} />
                            </>

                            : (
                                <>
                                    <Button onClick={toggle} className="styleUpload"> <label for="outfit__image" className="outfitImage">
                                        Upload an Image
                                </label></Button>
                                    <input id="outfit__image"
                                        type="file"
                                        name="file"
                                        placeholder="Upload an image"
                                        onChange={uploadImage}
                                    />
                                    <br></br>
                                    <img className="imagePreview" src={image} style={{ width: "100px" }} />
                                </>)
                }
                <br></br>
                <ClothingItemSelector key={clothingItemOutfit.id} outfit={outfit} closetItem={closetItem} setClosetItem={setClosetItem} {...props} />
                <br></br>
                <br></br>
                <fieldset>
                    <div className="form-group">
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
                    className="btn btn-primary saveOutfit">
                    Save
                    </button>
            </form>
        </>
    )
}

