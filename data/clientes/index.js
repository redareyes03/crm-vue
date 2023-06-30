import axios from 'axios'

const baseUrl = 'http://localhost:3333/clientes'

export const getClientes = async ()=> {
    const data = (await axios(`${baseUrl}`)).data
    return data
}

export const postCliente = async (data) => {
    const response = await axios.post(baseUrl, data)
    return response
}

export const getClienteById = async (id) => {
    try {
        return (await axios.get(`${baseUrl}/${id}`)).data
    } catch (error) {
        throw new Error(error)
    }
}