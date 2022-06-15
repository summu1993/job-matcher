import axios from 'axios'
import { BASE_URL } from '../constants/constant'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

const webAppAxios = axios.create({ ...config, baseURL: BASE_URL })

export default webAppAxios
