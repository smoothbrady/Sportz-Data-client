import axios from "axios"
import apiUrl from "../apiConfig"

export const nflShow = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/nfl',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

export const nbaShow = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/nba',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

export const mlbShow = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/mlb',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}