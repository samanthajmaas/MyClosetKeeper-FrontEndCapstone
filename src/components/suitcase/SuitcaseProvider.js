import React, { useState } from "react"

export const SuitcaseContext = React.createContext()

export const SuitcaseProvider = (props) => {
    const [suitcases, setSuitcases] = useState([])

    const getSuitcases = () => {
        return fetch("http://localhost:8088/suitcases")
            .then(res => res.json())
            .then(setSuitcases)
    }

    const addSuitcases = (suitcase) => {
        return fetch("http://localhost:8088/suitcases", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(suitcase)
        })
            .then(res => res.json())
            .then((suitcase) => {
                getSuitcases()
                return suitcase
            })
    }

    const deleteSuitcase = (suitcaseId) => {
        return fetch(`http://localhost:8088/suitcases/${suitcaseId}`, {
            method: "DELETE"
        })
            .then(getSuitcases)
    }

    const updateSuitcase = (suitcase) => {
        return fetch(`http://localhost:8088/suitcases/${suitcase.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(suitcase)
        })
            .then(res => res.json())
            .then((suitcase) => {
                getSuitcases()
                return suitcase
            })
    }

    const getSuitcaseById = (id) => {
        return fetch(`http://localhost:8088/suitcases/${id}`)
            .then(res => res.json())
    }

    return (
        <SuitcaseContext.Provider value={{
            suitcases, getSuitcases, addSuitcases, deleteSuitcase, updateSuitcase, getSuitcaseById
        }}>
            {props.children}
        </SuitcaseContext.Provider>
    )
}
