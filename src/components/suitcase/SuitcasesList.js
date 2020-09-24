import React, { useContext, useEffect, useState } from "react"
import { MyClosetContext } from "../myCloset/MyClosetProvider"
import { OutfitsContext } from "../outfits/OutfitsProvider"
import { Suitcase } from "./Suitcase"
import { SuitcaseContext } from "./SuitcaseProvider"
import { SuitcasesClosetItemsContext } from "./SuitcasesClosetItemsProvider"
import { SuitcasesOutfitsContext } from "./SuitcasesOutfitsProvider"
import "./Suitcase.css"



export const SuitcasesList = (props) => {
    const {suitcases, getSuitcases, addSuitcases} = useContext(SuitcaseContext)
    const { outfits, getOutfits} = useContext(OutfitsContext)
    const { closetItems, getClosetItems } = useContext(MyClosetContext)
    const {suitcasesOutfits, getSuitcasesOutfits} = useContext(SuitcasesOutfitsContext)
    const {suitcasesClosetItems, getSuitcasesClosetItems} = useContext(SuitcasesClosetItemsContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    useEffect(() => {
        getSuitcases()
        getOutfits()
        getClosetItems()
        getSuitcasesOutfits()
        getSuitcasesClosetItems()
    }, [])

    const filteredSuitcase = suitcases.filter(suitcase => suitcase.userId === parseInt(localStorage.getItem("closet__user")))

    const createNewSuitcasesObj = () => {
        addSuitcases({
            tripName: "",
            userId: parseInt(localStorage.getItem("closet__user"))
        })
        .then((suitcaseObj) => props.history.push(`/suitcases/${suitcaseObj.id}/create`))
    }

    return (
        <>
        <section className="suitcases">
                <h2 className="suitcasesHeading">Suitcases</h2>
                <button className="addSuitcaseButton" onClick={() => {
                    createNewSuitcasesObj()
                }}>
                    +Suitcase
                </button>
                {
                filteredSuitcase.map(suitcase => {
                    const outfitRelationships = suitcasesOutfits.filter(so => so.suitcaseId === suitcase.id)
                    const findOutfits = outfitRelationships.map(or => {
                        return outfits.find(outfit => outfit.id === or.outfitId)
                    })
                    const closetItemsRelationships = suitcasesClosetItems.filter(sci => sci.suitcaseId === suitcase.id)
                    const findClosetItems = closetItemsRelationships.map(cir => {
                        return closetItems.find(closetItem => closetItem.id === cir.closetItemId)
                    })

                    return <Suitcase key ={suitcase.id} suitcase={suitcase} outfits={outfits} closetItems={closetItems} findClosetItems={findClosetItems} findOutfits={findOutfits} {...props} />

                })
            }

            </section>
        </>
    )
}
