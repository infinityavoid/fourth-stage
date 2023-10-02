import type { Module } from 'vuex'
import type { IRootState } from "./store";
import router from "@/router";


export interface State {
  mode:string | null
}

const auth: Module<State, IRootState> = {
  state: {
    mode:localStorage.getItem('mode')
  },
  actions: {
    setMode:({ commit }, mode:string) => {
        commit('setMode', mode)
    }
  },
  mutations: {
    setMode(state, mode: string) {
        state.mode = mode;
    },
  },
  getters: {
    mode: (state)=> {
      if (state.mode != null)
      {
        console.log(state.mode)
        return state.mode
      }
    },
  }
}

export default auth