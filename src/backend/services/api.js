import axios from 'axios'
// import {predict} from '../../hello'

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

const getAllItems = () => api.get(`/items`)
const getItemById = id => api.get(`/item/${id}`)
const insertItem = payload => api.post(`/item`, payload)
const updateItemById = (id, payload) => api.put(`/item/${id}`, payload)
const deleteItemById = id => api.put(`/item/delete/${id}`)

const predictObjects = (payload) => api.post(`/imagesearch`, payload)


const apis = {
    getAllItems,
    getItemById,
    insertItem,
    updateItemById,
    deleteItemById,
    predictObjects
}

export default apis