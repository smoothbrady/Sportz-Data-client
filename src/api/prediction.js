import apiUrl from '../apiConfig'
import axios from 'axios'

export const createPrediction = (user, gameId, newPrediction) => {
    return axios({
        url: `${apiUrl}/predictions/${gameId}`,
        method: 'POST',
        data: { prediction: newPrediction }
    })
}

export const updatePrediction = (user, gameId, updatedPrediction) => {
    return axios({
        url: `${apiUrl}/predictions/${gameId}/${updatedPrediction._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
        data: { prediction: updatedPrediction }
    })
}

export const deletePrediction = (user, gameId, predictionId) => {
    return axios({
        url: `${apiUrl}/predictions/${gameId}/${predictionId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}