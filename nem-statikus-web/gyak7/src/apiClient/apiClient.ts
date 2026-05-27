import axios from "axios"

export const BASE_URL = "http://127.0.0.1:8005/api"

const apiClient = axios.create({
    baseURL : BASE_URL,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default apiClient