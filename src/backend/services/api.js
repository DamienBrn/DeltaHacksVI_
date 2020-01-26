import axios from 'axios' 

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

const getAllItems = () => api.get(`/items`)
const getItemById = id => api.get(`/item/${id}`)
const insertItem = payload => api.post(`/item`, payload)
const updateItemById = (id, payload) => api.put(`/item/${id}`, payload)
const deleteItemById = id => api.put(`/item/delete/${id}`)


const apis = {
    getAllItems,
    getItemById,
    insertItem,
    updateItemById,
    deleteItemById
}

export default apis