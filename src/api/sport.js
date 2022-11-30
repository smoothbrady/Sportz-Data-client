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

export const nhlShow = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/nhl',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

export const ncaafShow = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/ncaaf',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

export const ncaabShow = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/ncaab',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}