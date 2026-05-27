import axios from "axios"

export const DEFAULT_URL = "http://127.0.0.1:8005/api"

const apiClient = axios.create({
    baseURL : DEFAULT_URL,
    headers :{
        "Content-Type" : "application/json"
    }
})

export default apiClient