import React, { useContext, useEffect, useState } from "react"
import { OutfitsContext } from "../outfits/OutfitsProvider"
import { OutfitSelected } from "./OutfitSelected"
import { SuitcaseContext } from "./SuitcaseProvider"
import { SuitcasesOutfitsContext } from "./SuitcasesOutfitsProvider"
import "./Suitcase.css"

export const OutfitSelector = (props) => {
    const { suitcasesOutfits, getSuitcasesOutfits, addSuitcasesOutfits } = useContext(SuitcasesOutfitsContext)
    const { outfits, getOutfits } = useContext(OutfitsContext)
    const { suitcases, getSuitcases } = useContext(SuitcaseContext)

    const [suitcaseOutfit, setSuitcaseOutfit] = useState({})
    const [selectedOutfits, setSelectedOutfits] = useState([])

    const handleControlledInputChange = (broswerEvent) => {
        const selectedOutfit = Object.assign({}, props.outfit)
        selectedOutfit[broswerEvent.target.name] = broswerEvent.target.value
        props.setOutfit(selectedOutfit)
        setSuitcaseOutfit(selectedOutfit)
    }

    useEffect(() => {
        getOutfits()
        getSuitcasesOutfits()
    }, [])

    useEffect(() => {
        getSuitcases()
    }, [])

    useEffect(() => {
        // Filtering over the relationships array to find the outfitIds that match the Outfit id in the URL
        const relationships = suitcasesOutfits.filter(o => o.suitcaseId === parseInt(props.match.params.suitcaseId)) || {}
        // Mapping over the new array of relationships that only have the matching outfit Id that we need
        const findOutfit = relationships.map(ci => {
            //In this new relationships array, we are trying to find the closet item that matches the relationship closet item
            const foundOutfit = outfits.find(outfit => outfit.id === ci.outfitId)
            //We are updating the obj stored in the foundClothingItem variable with a new property called relationship Id and we are setting that Id to the Id of the relationship obj
            foundOutfit.relationshipId = ci.id
            // here we are returning that obj which is saved in the findClothingItem variable
            return foundOutfit
        })
        // updating the selectedClosetItems array state variable with this obj. 
        setSelectedOutfits(findOutfit)
    }, [suitcasesOutfits])

    const constructNewRelationship = () => {
        const outfitId = parseInt(suitcaseOutfit.outfitId)
        const getSuitcaseId = suitcases.find(suitcase => suitcase.id === suitcases.length)

        addSuitcasesOutfits({
            outfitId: outfitId,
            suitcaseId: getSuitcaseId.id
        })
    }



    return (
        <>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="outfitId">Add Outfit:</label>
                    <select name="outfitId" className="form-control"
                        proptype="int"
                        value={suitcaseOutfit.outfitId}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select an outfit...</option>
                        {outfits.map(outfit => (
                            <option key={outfit.id} value={outfit.id}>
                                {outfit.event}
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
                {"+"}
            </button>


            <div>
                {/* We are mapping over the array of selected closet items and then for each one we are passing through the ClothingItemSelected function to have it render to the DOM */}
                {selectedOutfits.map(selected => {
                    return <OutfitSelected key={selected.id} selected={selected} suitcaseOutfit={suitcaseOutfit} {...props} />
                })}
            </div>

        </>
    )
}