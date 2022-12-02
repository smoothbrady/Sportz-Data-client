import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import PredictionForm from '../shared/PredictionForm'
import { createPrediction, updatePrediction } from '../../api/prediction'

const NewPredictionModal = (props) => {
    const {
        user, show, handleClose, msgAlert, triggerRefresh, game
    } = props

    const [prediction, setPrediction] = useState(props.prediction)

    const handleChange = (e) => {
        setPrediction(prevPrediction => {
            const name = e.target.name
            let value = e.target.value

            const updatedPrediction = { [name]: value }

            return {
                ...prevPrediction, ...updatedPrediction
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        updatePrediction(user, game._id, prediction)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Updated your prediction!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Failed to update your prediction' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.header closeButton/>
            <Modal.Body>
                <PredictionForm
                    prediction={prediction}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Let us know your prediction!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default NewPredictionModal