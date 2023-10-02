import { createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import MainPage from '../components/main.vue'
import CompassPage from '../components/compassPage.vue'
import LikedPage from '../components/liked.vue'
import UserPage from '../components/userPage.vue'
import getStarted from '@/components/getStarted.vue';
import registerSign from '@/components/registerSign.vue';
import chooseMode from '@/components/chooseMode.vue';
import signIn from '@/components/signIn.vue';
import register from '@/components/register.vue';
import player from '@/components/player.vue';
import lyrics from '@/components/lyrics.vue'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'getStarted',
    component: getStarted,
  },
  {
    path: '/chooseMode',
    name: 'chooseMode',
    component: chooseMode,
  },
  {
    path: '/regSign',
    name: 'regSign',
    component: registerSign,
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: signIn,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/Main',
    name: 'Main',
    component: MainPage,
  },
  {
    path: '/player',
    name: 'player',
    component: player,
  },
  {
    path: '/lyrics',
    name: 'lyrics',
    component: lyrics,
  },
  {
    path: '/compass',
    name: 'Compass',
    component: CompassPage,
  },
  {
    path: '/liked',
    name: 'Liked',
    component: LikedPage,
  },
  {
    path: '/user',
    name: 'UserPage',
    component: UserPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;