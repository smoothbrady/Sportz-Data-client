import axios from "axios"
import apiUrl from "../apiConfig"

export const nflTeam = (user) => {
    console.log(user)
    return axios ({
        method: 'GET', 
        url: apiUrl + '/nfl/teams',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const nbaTeam = (user) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/nba/teams',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const mlbTeam= (user) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/mlb/teams',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const nhlTeam = (user) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/nhl/teams',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const ncaafTeam= (user) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/ncaaf/teams',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const ncaabTeam = (user) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/ncaab/teams',
        // headers: {
        //     Authorization: `Token token=${user.token}`,
        // },
    })
}

export const localTeamShow = (user, apiId) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/teams/bookmarks' + apiId
    })
}

export const teamUpdate = (data, user, id) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/teams/bookmark' + id,
        data: {
            game: data,
        },
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

export const teamDelete = (user, id) => {
    return axios({
        method: 'DELETE',
        url: apiUrl + '/teams/' + id,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}