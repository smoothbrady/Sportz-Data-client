import apiUrl from "../apiConfig"
import axios from "axios"

export const nbaGame = (user) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/nba/games',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const nflGame = (user) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/nfl/games',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const mlbGame = (user) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/mlb/games',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const nhlGame = (user) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/nhl/games',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const ncaafGame = (user) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/ncaaf/games',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const ncaabGame = (user) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/ncaab/games',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const localGameShow = (user, gameId) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/teams/bookmarks' + gameId
    })
}

export const gameUpdate = (data, user, gameId) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/teams/addToBookmarks' + gameId,
        data: {
            game: data,
        },
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

export const gameDelete = (user, gameId) => {
    return axios({
        method: 'DELETE',
        url: apiUrl + '/teams/' + gameId,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}