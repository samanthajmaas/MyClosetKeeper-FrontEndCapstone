import React, { useContext, useState, useEffect } from "react"
import { ClosetItemSelector } from "./ClosetItemSelectorForSuitcaseForm"
import { OutfitSelector } from "./OutfitSelectorForSuitcaseForm"
import { SuitcaseContext } from "./SuitcaseProvider"
import { SuitcasesClosetItemsContext } from "./SuitcasesClosetItemsProvider"
import { SuitcasesOutfitsContext } from "./SuitcasesOutfitsProvider"
import "./Suitcase.css"
import { Button } from 'reactstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const NewSuitcaseForm = (props) => {
    const { suitcases, updateSuitcase, getSuitcases, deleteSuitcase } = useContext(SuitcaseContext)
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
        const matchingClosetItemRelationships = suitcasesClosetItems.map(closetItemRelationship => closetItemRelationship.suitcaseId === suitcaseId)
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
            startDate: suitcase.startDate,
            endDate: suitcase.endDate,
            tripName: suitcase.tripName,
            details: suitcase.details,
            userId: parseInt(localStorage.getItem("closet__user"))
        })
            .then(() => props.history.push(`/suitcases`))
    }


    return (
        <>
            <Button
                onClick={evt => {
                    const suitcaseId = parseInt(props.match.params.suitcaseId)
                    deleteSuitcase(suitcaseId).then(() => props.history.push(`/suitcases`))
                }}
            >
                <ExitToAppIcon style={{ fontSize: 45 }} className="exitIcon" />
            </Button>
            <form className="newSuitcaseForm">
                <h2 className="newSuitcaseForm__title">{props.edit ? "Update Suitcase" : "Add New Suitcase"}</h2>
                    <br></br>
                <OutfitSelector key={suitcaseOutfit.id} outfit={outfit} setOutfit={setOutfit} {...props} />
                <br></br>
                <ClosetItemSelector key={suitcaseClosetItem.id} closetItem={closetItem} setClosetItem={setClosetItem} {...props} />
                <br></br>
                <fieldset>
                    <div className="form-group">
                        
                        <input type="text" name="tripName" required autoFocus className="form-control"
                            proptype="varchar"
                            placeholder="Where are you going?"
                            defaultValue={suitcase.tripName}
                            onChange={handleControlledInputChange}
                        ></input>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label className="dateFormLabels"> From:</label>
                        <input type="date" name="startDate" required autoFocus className="form-control"
                            defaultValue={suitcase.startDate}
                            onChange={handleControlledInputChange} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                    <label className="dateFormLabels"> To:</label>
                        <input type="date" name="endDate" required autoFocus className="form-control"
                            defaultValue={suitcase.endDate}
                            onChange={handleControlledInputChange} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        
                        <input type="text" name="details" required autoFocus className="form-control"
                            proptype="varchar"
                            placeholder="Trip details"
                            defaultValue={suitcase.details}
                            onChange={handleControlledInputChange}
                        ></input>
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        saveSuitcaseWithUpdates()
                    }}
                    className="btn btn-primary saveOutfit">
                    Save
                    </button>
            </form>
        </>
    )
}

