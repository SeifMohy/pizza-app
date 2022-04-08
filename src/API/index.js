import axios from "axios"

const API = axios.create({baseURL: "http://localhost:7080"})

export const getMenu = () => API.get("/menu/")

//export const getPostById = (id) => API.get(`/post/${id}`)

//export const addPost = (newPost) => API.post(`/post/:id`, newPost)

//export const addComment = (id, newComment) => API.post(`/posts/${id}/comment`, newComment)