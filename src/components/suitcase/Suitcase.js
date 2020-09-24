import React, { useContext, useState } from "react"
import Popup from "reactjs-popup"
import { SuitcaseDetails } from "./SuitcaseDetails"
import { SuitcaseContext } from "./SuitcaseProvider"
import "./Suitcase.css"
import {
    Card, CardBody,
    CardTitle, Button, UncontrolledCollapse
} from 'reactstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export const Suitcase = (props) => {
    const { deleteSuitcase } = useContext(SuitcaseContext)
    
    return (
        <>
            {/* <section className="suitcase">
                <Card className="suitcaseCard">
                    <CardBody className="suitcaseCardBody">

                        <CardTitle className="suitcase__tripName">{props.suitcase.tripName}</CardTitle>
                        <Popup classname="suitcasePopup" trigger={<button className="viewSuitcaseButton"> View Suitcase </button>} position="center">
                            <SuitcaseDetails key={props.suitcase.id} suitcase={props.suitcase} outfits={props.outfits} closetItems={props.closetItems} findClosetItems={props.findClosetItems} findOutfits={props.findOutfits} {...props} />
                        </Popup>
                        <Button className="deleteIconButton" onClick={
                            () => {
                                deleteSuitcase(props.suitcase.id)
                                    .then(() => {
                                        props.history.push(`/suitcases`)
                                    })
                            }
                        }>
                            <DeleteIcon className="deleteIcon" />
                        </Button>
                    </CardBody>
                </Card>
            </section> */}
            {/* <section className="suitcase">
                <div className="suitcaseCard">
                    <div className="suitcaseCardBody">
                        <h3 className="suitcase__tripName">{props.suitcase.tripName}</h3>
                <Button className="viewSuitcaseButton" id="toggler" style={{ marginBottom: '1rem' }}>View Suitcase</Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card>
                        <CardBody>
                            <section className="suitcasePopup">
                                <div className="suitcase__tripName">{props.suitcase.tripName}</div>
                                <div className="suitcase__outfits">
                                    {
                                        props.findOutfits.map(outfit => {
                                            return (<img src={outfit.image} style={{ width: "100px" }} />)
                                        })

                                    }
                                </div>
                                <div className="suitcase__closetItems">
                                    {
                                        props.findClosetItems.map(closetItem => {
                                            return (<img src={closetItem.image} style={{ width: "100px" }} />)
                                        })

                                    }
                                </div>
                                               
                                <div className="suitcase__description">{props.suitcase.description}</div>
                                <button  className = "editIconButton" onClick={() => {
                                    props.history.push(`/suitcases/edit/${props.suitcase.id}`)
                                }}><EditIcon className="editIcon" /></button>
                            </section>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                    <Button className="deleteIconButton" onClick={
                            () => {
                                deleteSuitcase(props.suitcase.id)
                                    .then(() => {
                                        props.history.push(`/suitcases`)
                                    })
                            }
                        }>
                            <DeleteIcon className="deleteIcon" />
                        </Button>
                    </div>
                </div>
            </section> */}
            <section className="suitcase">
                
                        
                            <section className="suitcasePopup">
                            <h3 className="suitcase__tripName">{props.suitcase.tripName}</h3>
                            <div className="suitcasePictures">
                                <div className="suitcase__outfits">
                                    <div>Outfits</div>
                                    {
                                        props.findOutfits.map(outfit => {
                                            return (
                                            <>
                                            <img src={outfit.image} style={{ width: "125px" }} />
                                            <div>{outfit.event}</div>
                                            </>
                                            )
                                        })

                                    }
                                </div>
                                <div className="suitcase__closetItems">
                                <div>Individual Items</div>
                                    {
                                        props.findClosetItems.map(closetItem => {
                                            return (
                                            <>
                                            <img src={closetItem.image} style={{ width: "125px" }} />
                                            <div>{closetItem.type}</div>
                                            </>
                                            )
                                        })

                                    }
                                </div>
                                </div>
                                                    {/* <div>
                                <WeatherList key ={props.suitcase.id} suitcase={props.suitcase} {...props}/>
                                </div> */}
                                <div className="suitcase__description">{props.suitcase.description}</div>
                                <button  className = "editIconButton" onClick={() => {
                                    props.history.push(`/suitcases/edit/${props.suitcase.id}`)
                                }}><EditIcon className="editIcon" /></button>
                            
                    <Button className="deleteIconButton" onClick={
                            () => {
                                deleteSuitcase(props.suitcase.id)
                                    .then(() => {
                                        props.history.push(`/suitcases`)
                                    })
                            }
                        }>
                            <DeleteIcon className="deleteIcon" />
                        </Button>
                        </section>
            </section>
        </>
    )
}