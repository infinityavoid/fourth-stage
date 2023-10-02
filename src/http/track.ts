import API from '.'
import type { AxiosResponse } from 'axios'
import type {ITrack} from '../types/authTypes'

export default {
      get: async(): Promise<AxiosResponse<ITrack[]>> => {
        return API.get<ITrack[]>('tracks/get')
      },
}
