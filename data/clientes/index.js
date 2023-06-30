import axios from 'axios'

const baseUrl = 'http://localhost:3333/clientes'

export const getClientes = async ()=> {
    const data = (await axios(`${baseUrl}`)).data
    return data
}

export const postCliente = async (data) => {
    try {
        const request = await axios.post(baseUrl, data)
        return request
    } catch (error) {
        return error
    }
}

export const getClienteById = async (id) => {
    try {
        return (await axios.get(`${baseUrl}/${id}`)).data
    } catch (error) {
        throw new Error(error)
    }
}

export const editCliente = async (data, id) => {
    try {
        const request = await axios.patch(`${baseUrl}/${id}`, data)
        return request
    } catch (error) {
        return error
    }
}