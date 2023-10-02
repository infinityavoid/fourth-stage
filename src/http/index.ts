import axios from "axios";
import authService from '../http/auth'
import router from "@/router";

export const API_URL = 'http://localhost:8000'

const API = axios.create({
    baseURL:API_URL,
    withCredentials: true
}) 

API.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  })

API.interceptors.response.use((config) => {
  return config
}, async (err) => {
  const originalRequest = err.config
  if (err.response.status === 406 && err.config && !err.config._isRetry)
  {
    try {
      const response = await authService.checkAuth();
      localStorage.setItem('token', response.data.accessToken)
      API.request(originalRequest)
    } catch (error) { //отключить плеер, вернуть на страницу логина
      console.log(error)
      localStorage.removeItem('token')
      router.push({path:'/regSign'})
    } 
  }
  throw err
})

export default API