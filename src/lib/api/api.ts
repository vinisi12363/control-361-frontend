import axios from 'axios'
import { env } from '../env'

const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${env.VITE_API_KEY}`,
  },
})
export { api }
