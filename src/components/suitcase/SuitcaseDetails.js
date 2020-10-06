import React, { useContext, useEffect, useState } from "react"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { SuitcaseContext } from "./SuitcaseProvider";
import { Button } from "reactstrap";
import { OutfitsContext } from "../outfits/OutfitsProvider";
import { MyClosetContext } from "../myCloset/MyClosetProvider";
import { SuitcasesOutfitsContext } from "./SuitcasesOutfitsProvider";
import { SuitcasesClosetItemsContext } from "./SuitcasesClosetItemsProvider";
import { Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



export const SuitcaseDetails = (props) => {
    const { suitcases, getSuitcases, deleteSuitcase } = useContext(SuitcaseContext)
    const { outfits, getOutfits } = useContext(OutfitsContext)
    const { closetItems, getClosetItems } = useContext(MyClosetContext)
    const { suitcasesOutfits, getSuitcasesOutfits } = useContext(SuitcasesOutfitsContext)
    const { suitcasesClosetItems, getSuitcasesClosetItems } = useContext(SuitcasesClosetItemsContext)

    const [suitcase, setSuitcase] = useState({})
    const [matchingOutfits, setMatchingOutfits] = useState([])
    const [matchingClosetItems, setMatchingClosetItems] = useState([])

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    //changes the format of the date from yyyy-mm-dd to mm-dd-yyyy
    useEffect(() => {
        // I wrote || "-" so split has something to do the first time
        const tripStartDate = suitcase.startDate || "-"
        const splitStartDate = tripStartDate.split("-")
        const combinedStartDate = splitStartDate[1] + "/" + splitStartDate[2] + "/" + splitStartDate[0]
        setStartDate(combinedStartDate)
    })

    useEffect(() => {
        const tripEndDate = suitcase.endDate || "-"
        const splitEndDate = tripEndDate.split("-")
        const combinedEndDate = splitEndDate[1] + "/" + splitEndDate[2] + "/" + splitEndDate[0]
        setEndDate(combinedEndDate)
    })

    useEffect(() => {
        getSuitcases()
        getOutfits()
        getClosetItems()
        getSuitcasesOutfits()
        getSuitcasesClosetItems()
    }, [])

    useEffect(() => {
        const suitcase = suitcases.find(s => s.id === parseInt(props.match.params.suitcaseId)) || {}
        setSuitcase(suitcase)
    }, [suitcases])

    useEffect(() => {
        const outfitRelationships = suitcasesOutfits.filter(so => so.suitcaseId === suitcase.id)
        const findOutfits = outfitRelationships.map(or => {
            return outfits.find(outfit => outfit.id === or.outfitId)
        })
        setMatchingOutfits(findOutfits)
    }, [suitcasesOutfits, outfits])

    useEffect(() => {
        const closetItemsRelationships = suitcasesClosetItems.filter(sci => sci.suitcaseId === suitcase.id)
        const findClosetItems = closetItemsRelationships.map(cir => {
            return closetItems.find(closetItem => closetItem.id === cir.closetItemId)
        })
        setMatchingClosetItems(findClosetItems)
    }, [suitcasesClosetItems, closetItems])

    return (
        <>
            <Link className="navbar__link" to="/suitcases"><ExitToAppIcon style={{ fontSize: 45 }} className="exitIcon" /></Link>
            <section className="suitcase">
                <section className="suitcasePopup">
                    <h3 className="suitcase__tripName">{suitcase.tripName}</h3>

                    <div className="suitcase__dates">{startDate} - {endDate}</div>
                    <br></br>
                    <div className="suitcasePictures">
                        <div className="suitcase__outfits">

                            {
                                matchingOutfits.map(outfit => {
                                    return (
                                        <>
                                            <img src={outfit.image} style={{ width: "125px" }} />
                                            
                                        </>
                                    )
                                })

                            }
                        </div>
                        <div className="suitcase__closetItems">

                            {
                                matchingClosetItems.map(closetItem => {
                                    return (
                                        <>
                                            <img src={closetItem.image} style={{ width: "125px" }} />
                                            
                                        </>
                                    )
                                })

                            }
                        </div>
                    </div>
                    <br></br>
                    <div className="suitcase__detailsTitle">Trip Details</div>
                    <div className="suitcase__details">{suitcase.details}</div>
                    <br></br>
                    <Button className="deleteIconButton" onClick={
                        () => {
                            deleteSuitcase(suitcase.id)
                                .then(() => {
                                    props.history.push(`/suitcases`)
                                })
                        }
                    }>
                        <DeleteIcon className="deleteIcon" />
                    </Button>
                    <Button className="editIconButton" onClick={() => {
                        props.history.push(`/suitcases/edit/${suitcase.id}`)
                    }}>
                        <EditIcon className="editIcon" />
                    </Button>
                </section>
            </section>

        </>
    )
}