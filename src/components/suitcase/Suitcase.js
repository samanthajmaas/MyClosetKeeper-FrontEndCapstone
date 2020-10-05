import React, { useEffect, useState } from "react"
import "./Suitcase.css"
import {Button} from 'reactstrap';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Link } from "react-router-dom";

export const Suitcase = (props) => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    //changes the format of the date from yyyy-mm-dd to mm-dd-yyyy
    useEffect(() => {
        // I wrote || "-" so split has something to do the first time
        const tripStartDate = props.suitcase.startDate || "-"
        const splitStartDate = tripStartDate.split("-")
        const combinedStartDate = splitStartDate[1] + "/" + splitStartDate[2] + "/" + splitStartDate[0]
        setStartDate(combinedStartDate)
    })

    useEffect(() => {
        const tripEndDate = props.suitcase.endDate || "-"
        const splitEndDate = tripEndDate.split("-")
        const combinedEndDate = splitEndDate[1] + "/" + splitEndDate[2] + "/" + splitEndDate[0]
        setEndDate(combinedEndDate)
    })
    return (
        <>
            <Button className="suitcaseIcon">  
                        <Link className={"mainPage__link"} key={props.suitcase.id} to={`/suitcases/${props.suitcase.id}`}>
                        <div className="suitcase__tripName">{props.suitcase.tripName}</div>
                        <WorkOutlineIcon style={{ fontSize: 200 }} className="suitcaseIconImage" />
                        </Link>
                        <div className="suitcase__dates">{startDate} - {endDate}</div>
            </Button>
        </>
    )
}