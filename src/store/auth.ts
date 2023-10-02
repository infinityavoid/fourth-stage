import type { Module } from 'vuex'
import type { IRootState } from "./store";
import type {IUser} from '../types/authTypes'
import router from "@/router";
import authService from '../http/auth'


export interface State {
  user: IUser
  isAuth: boolean
  isLoading: boolean
}

const auth: Module<State, IRootState> = {
  state: {
    user:{} as IUser, //?
    isAuth:false,
    isLoading:false
  },
  actions: {
    register: async ({ commit }, user: IUser) => {
      try {
        console.log(user)
        const response = await authService.register(user);
        localStorage.setItem('token', response.data.accessToken);
        commit('setUser', response.data.user);
        commit('setAuth', true);
      } catch (error) {
        console.log(error);
      }
    },
    login: async ({ commit }, { login, password }) => {
      try {
        const response = await authService.login(login, password);
        localStorage.setItem('token', response.data.accessToken);
        commit('setUser', response.data.user);
        commit('setAuth', true);
      } catch (error) {
        console.log(error);
      }
    },
    logout: async ({ commit }) => {
      try {
        await authService.logout();
        localStorage.removeItem('token');
        commit('setUser', {} as IUser);
        commit('setAuth', false);
      } catch (error) {
        console.log(error);
      }
    },
    checkAuth: async ({ commit }) => {
      commit('setLoading', true);
      try {
        const response = await authService.checkAuth();
        localStorage.setItem('token', response.data.accessToken);
        commit('setUser', response.data.user);
        commit('setAuth', true);
      } catch (error) {
        localStorage.removeItem('token');
        commit('setAuth', false);
        router.push({ name: 'getStarted' });
      } finally {
        commit('setLoading', false);
      }
    }
  },
  mutations: {
    setAuth: (state, status: boolean) => {
      state.isAuth = status
    },
    setUser: (state, user: IUser) => {
      state.user = user
    },
    setLoading: (state, bool:boolean) => {
        state.isLoading = bool
    }
  },
  getters: {
    isAuth: (state):boolean => {
      return state.isAuth
    },
  }
}

export default auth