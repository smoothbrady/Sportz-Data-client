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