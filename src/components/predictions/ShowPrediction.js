import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { deletePrediction } from '../../api/prediction'
import EditPredictionModal from './EditPredictionModal'

const ShowPrediction = (props) => {
    const { prediction, game, user, msgAlert, triggerRefresh } = props

    const [editModalShow, setEditModalShow] = useState(false)

    const destroyPrediction = () => {
        deletePrediction(user, game._id, prediction._id)
            .then(() => {
                msgAlert({
                    heading: 'Prediction deleted!',
                    message: 'It is okay to be wrong!',
                    variant: 'success'
                })
            })
            // .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: 'Something went wrong!',
                    variant: 'danger'
                })
            })
    }

    return (
        <>
            <Card className="m-2">
                <Card.Body>
                </Card.Body>
                <Card.Footer>
                    { 
                        user && game.owner && user._id === game.owner._id 
                        ?
                        <>
                            <Button
                                className="m-2" 
                                variant="warning"
                                onClick={() => setEditModalShow(true)}  
                            >
                                Edit Prediction
                            </Button>
                            <Button 
                                className="m-2"
                                variant="danger"
                                onClick={() => destroyPrediction()}
                            >
                                Delete Prediction
                            </Button>
                        </>
                        :
                        null
                    }
                </Card.Footer>
            </Card>
            <EditPredictionModal
                user={user}
                game={game}
                prediction={prediction}
                msgAlert={msgAlert}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
            />
        </>
    )
}

export default ShowPrediction