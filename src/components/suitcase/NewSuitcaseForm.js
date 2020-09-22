import React, { useContext, useState, useEffect } from "react"
import { ClosetItemSelector } from "./ClosetItemSelectorForSuitcaseForm"
import { OutfitSelector } from "./OutfitSelectorForSuitcaseForm"
import { SuitcaseContext } from "./SuitcaseProvider"
import { SuitcasesClosetItemsContext } from "./SuitcasesClosetItemsProvider"
import { SuitcasesOutfitsContext } from "./SuitcasesOutfitsProvider"

export const NewSuitcaseForm = (props) => {
    const { suitcases, updateSuitcase, getSuitcases } = useContext(SuitcaseContext)
    const { suitcasesOutfits, getSuitcasesOutfits } = useContext(SuitcasesOutfitsContext)
    const {suitcasesClosetItems, getSuitcasesClosetItems} = useContext(SuitcasesClosetItemsContext)

    const [suitcase, setSuitcase] = useState({})
    const [outfit, setOutfit] = useState({})
    const [closetItem, setClosetItem] = useState({})
    const [suitcaseOutfit, setSuitcaseOutfit] = useState({})
    const [suitcaseClosetItem, setSuitcaseClosetItem] = useState({})
 
    const handleControlledInputChange = (broswerEvent) => {
        const newSuitcase = Object.assign({}, suitcase)
        newSuitcase[broswerEvent.target.name] = broswerEvent.target.value
        setSuitcase(newSuitcase)
    }


    const getSuitcaseToSave = () => {
        const suitcaseId = parseInt(props.match.params.suitcaseId)
        const selectedSuitcase = suitcases.find(a => a.id === suitcaseId) || {}
        const matchingOutfitRelationships = suitcasesOutfits.map(outfitRelationship => outfitRelationship.suitcaseId === suitcaseId) || {}
        const matchingClosetItemRelationships = suitcasesClosetItems.map(closetItemRelationship => closetItemRelationship.suitcaseId === suitcaseId )
        setSuitcase(selectedSuitcase)
        setSuitcaseOutfit(matchingOutfitRelationships)
        setSuitcaseClosetItem(matchingClosetItemRelationships)
    }

    useEffect(() => {
        getSuitcases()
        getSuitcasesOutfits()
        getSuitcasesClosetItems()
    }, [])

    useEffect(() => {
        getSuitcaseToSave()
    }, [suitcases, suitcasesOutfits, suitcasesClosetItems])


    const saveSuitcaseWithUpdates = () => {
        updateSuitcase({
            id: suitcase.id,
            tripName: suitcase.tripName,
            description: suitcase.description,
            userId: parseInt(localStorage.getItem("closet__user"))
        })
            .then(() => props.history.push(`/suitcases`))
    }


    return (
        <>
            <form className="newSuitcaseForm">
                <h2 className="newSuitcaseForm__title">{props.edit ? "Update Suitcase" : "Add New Suitcase"}</h2>
                    <br></br>
                <OutfitSelector key={suitcaseOutfit.id} outfit={outfit} setOutfit={setOutfit} {...props} />
                <ClosetItemSelector key={suitcaseClosetItem.id} closetItem={closetItem} setClosetItem={setClosetItem} {...props} />
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="tripName">Where are you going?</label>
                        <input type="text" name="tripName" required autoFocus className="form-control"
                            proptype="varchar"
                            defaultValue={suitcase.tripName}
                            onChange={handleControlledInputChange}
                        ></input>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Description of trip:</label>
                        <input type="text" name="description" required autoFocus className="form-control"
                            proptype="varchar"
                            placeholder="Why are you going? What will you do while there?"
                            defaultValue={suitcase.description}
                            onChange={handleControlledInputChange}
                        ></input>
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        saveSuitcaseWithUpdates()
                    }}
                    className="btn btn-primary">
                    Save
                    </button>
            </form>
        </>
    )
}

