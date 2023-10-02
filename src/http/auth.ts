import API from '.'
import type { AxiosResponse } from 'axios'
import type {authResponse, IUser} from '../types/authTypes'
import axios from "axios";
import { API_URL } from '.';

export default {
  register: async(data: IUser): Promise<AxiosResponse<authResponse>> => {
      return API.post<authResponse>('auth/registration', data)
    },
  
    login: async(login: string, password: string): Promise<AxiosResponse<authResponse>> => {
      return API.post<authResponse>('auth/login', {login, password})
    },
  
    logout: async(): Promise<void> => {
      return API.post('auth/logout')
    },
    checkAuth: async(): Promise<AxiosResponse<authResponse>> => {
      return await axios.get<authResponse>(`${API_URL}/auth/refresh`, { withCredentials: true })
    }
}

