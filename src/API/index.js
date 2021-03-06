import axios from "axios"

const API = axios.create({baseURL: "http://localhost:7080"})

export const getMenu = () => API.get("/menu/")

export const getOrders = () => API.get(`/order/pendingOrders`)

export const addOrder = (values) => API.post(`/order/send`, values)

//export const addComment = (id, newComment) => API.post(`/posts/${id}/comment`, newComment)