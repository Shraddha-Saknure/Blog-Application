import axios from "axios";

const endpoint = import.meta.env.VITE_API_URL ?? "/api/posts";

export const getPosts = () => axios.get(endpoint);
export const getPost = (id) => axios.get(`${endpoint}/${id}`);
export const createPost = (data) => axios.post(endpoint, data);
export const updatePost = (id, data) => axios.put(`${endpoint}/${id}`, data);
export const deletePost = (id) => axios.delete(`${endpoint}/${id}`);
