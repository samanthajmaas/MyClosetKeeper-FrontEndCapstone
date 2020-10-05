import React, { useContext, useState, useEffect } from "react"
import { MyClosetContext } from "./MyClosetProvider"
import { CategoriesContext } from "./CategoriesProvider"
import "./MyCloset.css"
import { Link } from "react-router-dom"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Collapse, Button} from 'reactstrap';

export const NewClosetItemForm = (props) => {
    const { addClosetItems, closetItems, updateClosetItem, getClosetItems } = useContext(MyClosetContext)
    const { categories, getCategories } = useContext(CategoriesContext)

    const [closetItem, setClosetItem] = useState({})
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const editMode = props.match.params.hasOwnProperty("closetItemId")

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

    const handleControlledInputChange = (event) => {
        const newClosetItem = Object.assign({}, closetItem)
        newClosetItem[event.target.name] = event.target.value
        setClosetItem(newClosetItem)
    }

    const getClosetItemInEditMode = () => {
        if (editMode) {
            const closetItemId = parseInt(props.match.params.closetItemId)
            const selectedClosetItem = closetItems.find(a => a.id === closetItemId) || {}
            setClosetItem(selectedClosetItem)
            setImage(closetItem.image)
        }
    }

    useEffect(() => {
        getClosetItems()
        getCategories()
    }, [])

    useEffect(() => {
        getClosetItemInEditMode()
    }, [closetItems])


    const constructNewClosetItem = () => {
        const categoryId = parseInt(closetItem.categoryId)

        if (categoryId === 0) {
            window.alert("Please select a category")
        } else {
            if (editMode) {
                updateClosetItem({
                    id: closetItem.id,
                    image: image,
                    type: closetItem.type,
                    color: closetItem.color,
                    size: closetItem.size,
                    material: closetItem.material,
                    placeOfPurchase: closetItem.placeOfPurchase,
                    categoryId: categoryId,
                    userId: parseInt(localStorage.getItem("closet__user"))
                })
                .then(() => {
                    if(categoryId === 1){
                    props.history.push(`/myCloset/tops`)
                    } else if(categoryId=== 2){
                    props.history.push(`/myCloset/bottoms`)
                    }else if(categoryId=== 3){
                    props.history.push(`/myCloset/onePieces`)
                    }else if(categoryId=== 4){
                    props.history.push(`/myCloset/jackets`)
                    }else if(categoryId=== 5){
                    props.history.push(`/myCloset/shoes`)
                    }else if(categoryId=== 6){
                    props.history.push(`/myCloset/accessorys`)
                    }
                })
            } else {
                addClosetItems({
                    image: image,
                    type: closetItem.type,
                    color: closetItem.color,
                    size: closetItem.size,
                    material: closetItem.material,
                    placeOfPurchase: closetItem.placeOfPurchase,
                    categoryId: categoryId,
                    userId: parseInt(localStorage.getItem("closet__user"))
                })
                .then(() => {
                    if(categoryId === 1){
                    props.history.push(`/myCloset/tops`)
                    } else if(categoryId=== 2){
                    props.history.push(`/myCloset/bottoms`)
                    }else if(categoryId=== 3){
                    props.history.push(`/myCloset/onePieces`)
                    }else if(categoryId=== 4){
                    props.history.push(`/myCloset/jackets`)
                    }else if(categoryId=== 5){
                    props.history.push(`/myCloset/shoes`)
                    }else if(categoryId=== 6){
                    props.history.push(`/myCloset/accessorys`)
                    }
                })
            }
        }
    }

    return (
        <>
        <Link className="navbar__link" to="/MyCloset"><ExitToAppIcon style={{ fontSize: 45 }} className="exitIcon" /></Link>
        <form className="newClothingItemForm">
            <h2 className="newClothingItemForm__title">{editMode ? "Update Clothing Item" : "Add New Item"}</h2>
            <fieldset>
                <div className="form-group">
                    <Button onClick={toggle} className="styleUpload"> <label for="clothingItem__image" className="clothingImage">
                        Upload an Image
                    </label></Button>
                    <input 
                        id="clothingItem__image"
                        type="file"
                        name="file"
                        placeholder="Upload an image"
                        onChange={uploadImage}
                    />
                    <br></br>
                    <Collapse isOpen={isOpen}>
                    <div className="imagePreview">
                    {loading ? (
                        <div> Loading... </div>
                    ) : editMode ? (
                        <img src={image} style={{ width: "150px" }} />

                    ) : (<img src={image} style={{ width: "150px" }} />)}
                    </div>
                    </Collapse>
                    <br></br>
                    <select name="categoryId" className="form-control"
                        proptype="int"
                        value={closetItem.categoryId}
                        onChange={handleControlledInputChange}
                    >

                        <option value="0">Select a category</option>
                        {categories.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">

                    <input type="text" name="type" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Type of clothing"
                        defaultValue={closetItem.type}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">

                    <input type="text" name="color" required className="form-control"
                        proptype="varchar"
                        placeholder="Color of clothing"
                        defaultValue={closetItem.color}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input type="text" name="size" className="form-control"
                        proptype="varchar"
                        placeholder="Size"
                        value={closetItem.size}
                        onChange={handleControlledInputChange}>
                    </input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">

                    <input type="text" name="material" className="form-control"
                        proptype="varchar"
                        placeholder="Material"
                        value={closetItem.material}
                        onChange={handleControlledInputChange}>
                    </input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">

                    <input type="text" name="placeOfPurchase" className="form-control"
                        proptype="varchar"
                        placeholder="Place of Purchase"
                        value={closetItem.placeOfPurchase}
                        onChange={handleControlledInputChange}>
                    </input>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewClosetItem()
                }}
                className="btn btn-primary saveNewItemButton">
                {editMode ? "Save Updates" : "Save New Item"}
            </button>
        </form>
        </>
    )
}
