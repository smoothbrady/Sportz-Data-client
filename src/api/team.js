import axios from "axios";
import apiUrl from "../apiConfig"

export const teamShow = (data) => {
    console.log('team showing')
    return axios({
        method: 'GET',
        url: apiUrl + 'NFL/teams',
        data: {
            teams: data,
        }
    })
}