import axios from "axios"

export const DEFAULT_ROUTE= "http://localhost:8001/api"

const apiclient = axios.create({
    baseURL : DEFAULT_ROUTE,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default apiclient