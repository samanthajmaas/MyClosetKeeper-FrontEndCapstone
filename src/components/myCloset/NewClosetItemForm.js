import React, {useContext, useState, useEffect} from "react"
import {MyClosetContext} from "./MyClosetProvider"
import{CategoriesContext} from "./CategoriesProvider"

export const NewClosetItemForm = (props) => {
    const {addClosetItems, closetItems, updateClosetItem, getClosetItems} = useContext(MyClosetContext)
    const {categories, getCategories} = useContext(CategoriesContext)

    const [closetItem, setClosetItem] = useState({})

    const editMode = props.match.params.hasOwnProperty("closetItemId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newClosetItem = Object.assign({}, closetItem)
        newClosetItem[event.target.name] = event.target.value
        setClosetItem(newClosetItem)
    }

    /*
        If there is a URL parameter, then the user has chosen to
        edit an animal.
            1. Get the value of the URL parameter.
            2. Use that `id` to find the animal.
            3. Update component state variable.
    */
    const getClosetItemInEditMode = () => {
        if (editMode) {
            const closetItemId = parseInt(props.match.params.closetItemId)
            const selectedClosetItem = closetItems.find(a => a.id === closetItemId) || {}
            setClosetItem(selectedClosetItem)
        }
    }

    // Get animals from API when component initializes
    useEffect(() => {
        getClosetItems()
        getCategories()
    }, [])

    // Once provider state is updated, determine the animal (if edit)
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
                    type: closetItem.type,
                    color: closetItem.color,
                    size: closetItem.size,
                    material: closetItem.material,
                    placeOfPurchase: closetItem.placeOfPurchase,
                    categoryId: categoryId,
                    userId: parseInt(localStorage.getItem("closet__user"))
                })
                    .then(() => props.history.push(`/myCloset`))
            } else {
                addClosetItems({
                    type: closetItem.type,
                    color: closetItem.color,
                    size: closetItem.size,
                    material: closetItem.material,
                    placeOfPurchase: closetItem.placeOfPurchase,
                    categoryId: categoryId,
                    userId: parseInt(localStorage.getItem("closet__user"))
                })
                    .then(() => props.history.push(`/myCloset`))
            }
        }
    }

    return (
        <form className="newClothingItemForm">
            <h2 className="newClothingItemForm__title">{editMode ? "Update Clothing Item" : "Add New Item"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryId">Category: </label>
                    <select name="categoryId" className="form-control"
                        proptype="int"
                        value={closetItem.categoryId}
                        onChange={handleControlledInputChange}>

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
                    <label htmlFor="name">Type: </label>
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
                    <label htmlFor="color">Clothing Color: </label>
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
                    <label htmlFor="size">Size: </label>
                    <input type="text" name="size" className="form-control"
                        proptype="varchar"
                        value={closetItem.size}
                        onChange={handleControlledInputChange}>
                    </input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="material">Material: </label>
                    <input type="text" name="material" className="form-control"
                        proptype="varchar"
                        value={closetItem.material}
                        onChange={handleControlledInputChange}>
                    </input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="placeOfPurchase">Place of Purchase: </label>
                    <input type="text" name="placeOfPurchase" className="form-control"
                        proptype="varchar"
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
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Save New Item"}
            </button>
        </form>
    )
}
