import axios from "axios";
import apiUrl from "../apiConfig"

export const teamShow = (data) => {
    return axios({
        method: 'GET',
        url: apiUrl + 'NFL/teams',
        data: {
            teams: data,
        }
    })
}