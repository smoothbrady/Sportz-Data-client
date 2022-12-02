import apiUrl from "../apiConfig"
import axios from "axios"

// view my profile
export const myProfile = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/my-profile',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

// add team to bookmarks
export const addToBookmarks = (user, gameId, sport) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + `/${sport}/games/mybookmarks/` + gameId,
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

// remove team from bookmarks
export const removeFromBookmarks = (user, gameId) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/teams/mybookmarks/remove/' + gameId,
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}