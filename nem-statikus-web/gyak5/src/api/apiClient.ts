import axios from "axios"

export const DEFAULT_ROUTE = "http://127.0.0.1:8005/api"

const apiClient = axios.create({
    baseURL : DEFAULT_ROUTE,
    headers: {
        "Content-Type" : "application/json"
    }
})

export default apiClient