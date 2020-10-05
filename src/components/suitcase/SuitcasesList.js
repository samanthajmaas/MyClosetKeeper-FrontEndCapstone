import React, { useContext, useEffect } from "react"
import { Suitcase } from "./Suitcase"
import { SuitcaseContext } from "./SuitcaseProvider"
import "./Suitcase.css"

export const SuitcasesList = (props) => {
    const { suitcases, getSuitcases, addSuitcases } = useContext(SuitcaseContext)

    useEffect(() => {
        getSuitcases()
    }, [])

    const filteredSuitcase = suitcases.filter(suitcase => suitcase.userId === parseInt(localStorage.getItem("closet__user")))

    const createNewSuitcasesObj = () => {
        addSuitcases({
            tripName: "",
            userId: parseInt(localStorage.getItem("closet__user"))
        })
            .then((suitcaseObj) => props.history.push(`/suitcases/create/${suitcaseObj.id}`))
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
                <div className="suitcaseButtons">
                    {filteredSuitcase.map(suitcase => {
                        return <Suitcase key={suitcase.id} suitcase={suitcase} {...props}/>
                    })
                    }
                </div>
            </section>
        </>
    )
}
