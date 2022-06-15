import axios from 'axios'
import { BASE_URL } from '../constants/constant'



const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
}

const webAppAxios = axios.create({ ...config, baseURL: baseUrl })

export default webAppAxios
