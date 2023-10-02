<template>
    <div :mode="mode" class="navigator">
        <router-link v-for="item in items" :to="item.path">
            <div class="navigator__item">
                <div v-if="$route.path === item.path" class="underline"></div>
                <img :src="$route.path === item.path ? item.activeImg : item.src" 
                :class="($route.path === item.path) ? 'navigator__item-icon_active' : 'navigator__item-icon'" 
                alt="">
            </div>
        </router-link>
    </div>
</template> 

<script lang="ts">
import { defineComponent } from 'vue';
import type { navItemProps } from '@/types/types';

interface State {
    items:navItemProps[]
}

export default defineComponent({
    data():State {
        return{
            items:[
                {
                    src: 'src/assets/house.svg',
                    path:'/main',
                    activeImg:'src/assets/house-active.svg'
                },
                {
                    src: 'src/assets/fa-solid_compass.svg',
                    path:'/compass',
                    activeImg:'src/assets/fa-solid_compass.svg'
                },
                {
                    src: 'src/assets/heart.svg',
                    path:'/liked',
                    activeImg:'src/assets/heart-active.svg'
                },
                {
                    src: 'src/assets/person.svg',
                    path:'/user',
                    activeImg:'src/assets/person-active.svg'
                },
            ]
        }
    },
    computed:{
        mode()
        {
           return this.$store.getters.mode
        },
    },
})
</script>
<style>
.navigator
{
    position: absolute;
    padding: 0 40px;
    bottom: 0;
    height: 70px;
    background: var(--bg-nav);
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
}
.navigator__item
{
    display: flex;
    flex-direction: column;
}
.navigator__item-icon
{
    padding-top: 15px;
    filter: var(--image-filter);
}
.navigator__item-icon_active
{
    padding-top: 15px;
}
.underline
{
    width: 28px;
    height: 3px;
    background: var(--Spotify-Color, #1ED760);
    border-radius: 0px 0px 2px 2px;
    align-self: center;
}
</style>@/types/types