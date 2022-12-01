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
export const addToBookmarks = (user, data, teamId) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/teams/mybookmarks/' + teamId,
        data: {
            team: data,
        },
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

// remove team from bookmarks
export const removeFromBookmarks = (user, teamId) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/teams/mybookmarks/remove/' + teamId,
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}