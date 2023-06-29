import axios from 'axios'

const baseUrl = 'http://localhost:3333/clientes'

export const getClientes = async ()=> {
    const data = (await axios(`${baseUrl}`)).data
    return data
}