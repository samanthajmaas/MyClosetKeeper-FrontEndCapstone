import React, { useContext } from "react"
import { OutfitsContext } from "./OutfitsProvider"
import "./Outfit.css"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
  import EditIcon from '@material-ui/icons/Edit';
  import DeleteIcon from '@material-ui/icons/Delete';

export const Outfit = (props) => {
    const { deleteOutfit } = useContext(OutfitsContext)

    return (
        <>
            <section className="outfit">
                <Card className="outfitCard">
                    <CardBody className="outfitCardBody">
                        <CardImg src={props.outfit.image} style={{ width: "175px" }} />
                        <CardTitle className="outfit__event"> {props.outfit.event}</CardTitle>
                        <CardText className="outfitClothingItems">
                            {
                                props.findClothingItems.map(closetItem => {
                                    return <div>{closetItem.type}</div>
                                })
                            }
                        </CardText>
                        <Button className="deleteIconButton" onClick={
                            () => {
                                deleteOutfit(props.outfit.id)
                                    .then(() => {
                                        props.history.push(`/outfits`)
                                    })
                            }
                        }>
                            <DeleteIcon className="deleteIcon" />
                        </Button>
                        <Button className="editIconButton" onClick={() => {
                            props.history.push(`/outfits/edit/${props.outfit.id}`)
                        }}>
                            <EditIcon className="editIcon" />
                        </Button>
                    </CardBody>
                </Card>
            </section>
        </>
    )
}