import axios from "axios"

export const baseUrl = "http://127.0.0.1:8005/api"

const apiclient = axios.create({
    baseURL : baseUrl,
    headers : {
        "Content-Type" : "application/json"
    }}
)

export default apiclient