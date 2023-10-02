import type { Module } from 'vuex/types/index.js'
import type { IRootState } from "./store";
import type {ITrack} from '../types/authTypes'
import router from "@/router";
import trackService from '../http/track'
import { API_URL } from '@/http';


export interface State {
  tracks: ITrack[]
  trackIndex: number | null
  currentTracks: ITrack[]
  duration: number | null
  isPlaying:boolean,
  currentTime:number | null
}

const auth: Module<State, IRootState> = {
  state: {
    tracks:[], 
    trackIndex: null,
    currentTracks: [],
    duration: null,
    isPlaying: false,
    currentTime:null
  },
  actions: {
    getTracks: async({commit}) => {
        return trackService.get().then((response) => {
          commit('setTracks', response.data)
        }).catch((e) => {console.log(e)})
      },
    play({ state, commit }, info) {
      const audioPlayer = document.getElementById('player') as HTMLAudioElement
      if(audioPlayer?.src == `${API_URL}/${info.url}` && (state.isPlaying && (state.currentTime != null && state.currentTime != 0))) {
        commit('setIsPlaying', false);
        audioPlayer.pause()
      }
      else {
        if(state.currentTime != null && state.currentTime != 0) {
          audioPlayer.play();
          commit('setIsPlaying', true);
        }
        else {
          audioPlayer.src = `${API_URL}/${info.url}`
          commit('setDuration', audioPlayer.duration)
          commit('setTrackIndex', info.id);
          commit('setIsPlaying', true);
          commit('setCurrentTracks', true);
          audioPlayer.play();
        }
      }
    },
    next({state, commit})
    {
      if (state.trackIndex != null && state.trackIndex < state.currentTracks.length - 1)
      {
        const audioPlayer = document.getElementById('player') as HTMLAudioElement
        state.trackIndex = state.trackIndex + 1
        audioPlayer.src = `${API_URL}/${state.currentTracks[state.trackIndex].url}`
        commit('setDuration', audioPlayer.duration)
        commit('setIsPlaying', true);
        audioPlayer.play();
      }
    },
    previous({state,commit})
    {
      if (state.trackIndex != null && state.trackIndex > 0)
      {
        const audioPlayer = document.getElementById('player') as HTMLAudioElement
        state.trackIndex = state.trackIndex - 1
        audioPlayer.src = `${API_URL}/${state.currentTracks[state.trackIndex].url}`
        commit('setDuration', audioPlayer.duration)
        commit('setIsPlaying', true);
        audioPlayer.play();
      }
    },
    setTrackDuration: ({commit}, duration: number) => {
      commit('setDuration', duration)
    },
    setCurrentTime:({commit}, time:number) => {
      const audioPlayer = document.getElementById('player') as HTMLAudioElement
      audioPlayer.currentTime = time
      commit('setTime', time)
    }
  },
  mutations: {
    setTracks(state, tracks: Array<ITrack>) { 
      state.tracks = tracks;
    },
    setTrackIndex(state, index: number) { 
      state.trackIndex = index;
    },
    setCurrentTracks(state) { 
      state.currentTracks = state.tracks;
    },
    setDuration(state, duration: number) {
      state.duration = duration;
    },
    setIsPlaying(state, isPlaying: boolean) { 
      state.isPlaying = isPlaying;
    },
    setTime(state, time:number) {
      state.currentTime = time
    }
  },
  getters: {
    getTracks: (state) => {
      return state.tracks
    },
    getCurrentTrack: (state) => {
      if (state.trackIndex != null)
      {
        return state.currentTracks[state.trackIndex].url
      }
    },
    getCurrentIndex: (state) => {
      return state.trackIndex
    },
    getCurrentTrackDuration:(state) => {
      return state.duration
    },
    getCurrentTime:(state) => {
      return state.currentTime
    },
    getIsPlaying:(state) => {
      return state.isPlaying
    }
  }
}

export default auth