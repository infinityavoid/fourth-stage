import type { InjectionKey} from 'vue';
import type { ModuleTree, StoreOptions } from 'vuex';
import { Store } from 'vuex';

export interface IRootState {
  modules: ModuleTree<IRootState>,
}

import auth from './auth';
import track from './track'
import settings from './settings'

const store: StoreOptions<IRootState> = {
  modules: {
    auth,
    track,
    settings
  },
}

export default new Store<IRootState>(store)

export const key: InjectionKey<Store<IRootState>> = Symbol()
