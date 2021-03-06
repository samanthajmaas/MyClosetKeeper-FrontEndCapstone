import React, { useContext, useEffect, useState } from "react"
import { MyClosetContext } from "../myCloset/MyClosetProvider"
import { ClothingItemsOutfitsContext } from "./ClothingItemsOutfitsProvider"
import { ClothingItemSelected } from "./ClothingItemsSelected"
import { OutfitsContext } from "./OutfitsProvider"
import "./Outfit.css"


export const ClothingItemSelector = (props) => {
    const { clothingItemOutfits, getClothingItemsOutfits, addClothingItemsOutfits } = useContext(ClothingItemsOutfitsContext)
    const { closetItems, getClosetItems } = useContext(MyClosetContext)
    const { outfits, getOutfits } = useContext(OutfitsContext)

    const [clothingItemOutfit, setClothingItemOutfit] = useState({})
    const [selectedClosetItems, setSelectedClosetItems] = useState([])
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    const handleControlledInputChange = (broswerEvent) => {
        const selectedClothingItem = Object.assign({}, props.closetItem)
        selectedClothingItem[broswerEvent.target.name] = broswerEvent.target.value
        props.setClosetItem(selectedClothingItem)
        setClothingItemOutfit(selectedClothingItem)
    }

    useEffect(() => {
        getClosetItems()
        getClothingItemsOutfits()
    }, [])

    useEffect(() => {
        getOutfits()
    }, [])

    useEffect(() => {
        // Filtering over the relationships array to find the outfitIds that match the Outfit id in the URL
        const relationships = clothingItemOutfits.filter(o => o.outfitId === parseInt(props.match.params.outfitId)) || {}
        // Mapping over the new array of relationships that only have the matching outfit Id that we need
        const findClothingItem = relationships.map(ci => {
            //In this new relationships array, we are trying to find the closet item that matches the relationship closet item
            const foundClothingItem = closetItems.find(closetItem => closetItem.id === ci.closetItemId)
            //We are updating the obj stored in the foundClothingItem variable with a new property called relationship Id and we are setting that Id to the Id of the relationship obj
            foundClothingItem.relationshipId = ci.id
            // here we are returning that obj which is saved in the findClothingItem variable
            return foundClothingItem
        })
        // updating the selectedClosetItems array state variable with this obj. 
        setSelectedClosetItems(findClothingItem)
    }, [clothingItemOutfits])

    const constructNewRelationship = () => {
        const outfitId = parseInt(props.match.params.outfitId)
        const closetItemId = parseInt(clothingItemOutfit.closetItemId)
        const getOutfitId = outfits.find(outfit => outfit.id === outfitId)

        addClothingItemsOutfits({
            closetItemId: closetItemId,
            outfitId: getOutfitId.id
        })

    }

    return (
        <>
            <fieldset>
                <div className="form-group">
                    <select data-type="mini" name="closetItemId" className="form-control outfitClosetItemSelect"
                        value={clothingItemOutfit.closetItemId}
                        
                        onChange={handleControlledInputChange}>
                            <optgroup className="options">
                                <option className="options" value="0">Select a clothing item...</option>
                        
                                {
                                closetItems.map(closetItem => (
                                    
                                    <option className="options"  key={closetItem.id} value={closetItem.id}>
                                        {closetItem.type}
                                    </option>
                                ))
                                }
                        </optgroup>
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewRelationship()
                }}
                className="btn btn-primary addClothingItemToOutfitButton">
                {"+"}
            </button>
            <div className="listOfSelectedItems">
                {/* We are mapping over the array of selected closet items and then for each one we are passing through the ClothingItemSelected function to have it render to the DOM */}
                {selectedClosetItems.map(selected => {
                    return <ClothingItemSelected key={selected.id} selected={selected} outfit={props.outfit} clothingItemOutfit={clothingItemOutfit} {...props} />
                })}
            </div>
        </>
    )
}
