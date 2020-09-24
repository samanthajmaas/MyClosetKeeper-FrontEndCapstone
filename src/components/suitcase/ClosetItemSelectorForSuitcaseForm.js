import React, { useContext, useEffect, useState } from "react"
import { MyClosetContext } from "../myCloset/MyClosetProvider"
import { ClosetItemSelected } from "./ClosetItemSelected"
import { SuitcaseContext } from "./SuitcaseProvider"
import { SuitcasesClosetItemsContext } from "./SuitcasesClosetItemsProvider"
import "./Suitcase.css"

export const ClosetItemSelector = (props) => {
    const{suitcasesClosetItems, getSuitcasesClosetItems, addSuitcasesClosetItems} = useContext(SuitcasesClosetItemsContext)
    const {closetItems, getClosetItems} = useContext(MyClosetContext)
    const { suitcases, getSuitcases } = useContext(SuitcaseContext)

    const [suitcaseClosetItem, setSuitcaseClosetItem] = useState({})
    const [selectedClosetItems, setSelectedClosetItems] = useState([])

    const handleControlledInputChange = (broswerEvent) => {
        const selectedClosetItem = Object.assign({}, props.closetItem)
        selectedClosetItem[broswerEvent.target.name] = broswerEvent.target.value
        props.setClosetItem(selectedClosetItem)
        setSuitcaseClosetItem(selectedClosetItem)
    }

    useEffect(() => {
        getClosetItems()
        getSuitcasesClosetItems()
    }, [])

    useEffect(() => {
        getSuitcases()
    }, [])

    useEffect(() => {
        // Filtering over the relationships array to find the outfitIds that match the Outfit id in the URL
        const relationships = suitcasesClosetItems.filter(o => o.suitcaseId === parseInt(props.match.params.suitcaseId)) || {}
        // Mapping over the new array of relationships that only have the matching outfit Id that we need
        const findClosetItem = relationships.map(ci => {
            //In this new relationships array, we are trying to find the closet item that matches the relationship closet item
            const foundClosetItem = closetItems.find(closetItem => closetItem.id === ci.closetItemId)
            //We are updating the obj stored in the foundClothingItem variable with a new property called relationship Id and we are setting that Id to the Id of the relationship obj
            foundClosetItem.relationshipId = ci.id
            // here we are returning that obj which is saved in the findClothingItem variable
            return foundClosetItem
        })
        // updating the selectedClosetItems array state variable with this obj. 
        setSelectedClosetItems(findClosetItem)
    }, [suitcasesClosetItems])

    const constructNewRelationship = () => {
        const suitcaseId = parseInt(props.match.params.suitcaseId)
        const closetItemId = parseInt(suitcaseClosetItem.closetItemId)
        const getSuitcaseId = suitcases.find(suitcase => suitcase.id === suitcaseId)

        addSuitcasesClosetItems({
            closetItemId: closetItemId,
            suitcaseId: getSuitcaseId.id
        })
    }



    return (
        <>
            <fieldset>
                <div className="form-group">
                    
                    <select name="closetItemId" className="form-control"
                        proptype="int"
                        value={suitcaseClosetItem.closetItemId}
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
                className="btn btn-primary addClothingItemToOutfitButton">
                {"+"}
            </button>


            <div className="listOfSelectedClosetItems">
                {/* We are mapping over the array of selected closet items and then for each one we are passing through the ClothingItemSelected function to have it render to the DOM */}
                {selectedClosetItems.map(selected => {
                    return <ClosetItemSelected key={selected.id} selected={selected} suitcaseClosetItem={suitcaseClosetItem} {...props} />
                })}
            </div>

        </>
    )
}
