<template>
    <div class="page" :mode="mode">
        <div class="header-rectangle"></div>
        <div class="container">
            <headerVue
            class="userPage__header"
            :header-nav="headerNav"
            />
            <div class="user">
                <img src="../assets/user-image.svg" alt="user-picture" class="user-picture">
                <div class="user-email">oxeeeee@mail.ru</div>
                <div class="user-name">Oxee</div>
            </div>
            <div class="user-follow">
                <div class="follow">
                    <div class="count">778</div>
                    <div class="text">followers</div>
                </div>
                <div class="follow">
                    <div class="count">778</div>
                    <div class="text">following</div>
                </div>
            </div>
            <div class="content">
                <div class="content__title">Public Playlists</div>
                <userPlaylists
                :playlists="playlists"/>
            </div>
        </div>
    </div>
    <bgNavigation></bgNavigation>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import headerVue from '../ui/headerNav.vue';
import bgNavigation from '../ui/bgNavigation.vue';
import userPlaylists from '../ui/userPlaylists.vue';
import type {  headerNav, playlists } from '@/types/types';
interface State {
    headerNav: headerNav,
    playlists: playlists[]
}
export default defineComponent({
    components:{
        headerVue,
        bgNavigation,
        userPlaylists
    },
    data(): State {
        return {
            headerNav:{
                options:{
                    leftContent:{
                        content:'back',
                        onClick:() => {
                            this.$router.push({path:'/main'})
                        }
                    },
                    rightContent:{
                        content:'menu',
                        onClick:() => console.log('work')
                    },
                }
            },
            playlists:[
                {
                    tracks:[
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    ]
                },
                {
                    tracks:[
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    ]
                },
                {
                    tracks:[
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    ]
                },
                {
                    tracks:[
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    {
                        name:'qwe',
                        trackImg:'src/assets/song.svg'
                    },
                    ]
                },
            ]
        }
    },
    computed: {
        mode()
        {
           return this.$store.getters.mode
        },
    }
})
</script>
<style scoped>
.page
{
    height: 100%;
    background-color: var(--page-color);
}
.container
{
    position: relative;
    padding: 0 20px;
}
.header-rectangle
{
    width: 375px;
    height: 349px;
    border-radius: 0px 0px 95px 95px;
    box-shadow: var(--user-shadow);
    background-color: var(--page-color);
    position: absolute;
    z-index: 1;
    right: 0;
    left: 0;
}
.userPage__header
{
    justify-content: space-between;
    position: relative;
    z-index: 2;
}
.user
{
    position: relative;
    z-index: 2;
    margin-top: 10px !important;
    display: flex;
    flex-direction: column;
    width: 100px;
    align-items: center;
    margin: 0 auto;
}
.user-picture
{
    
    width: 75px;
    height: 75px;
}
.user-email
{
    color: var(--description-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
}
.user-name
{
    color: var(--text-color);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.user-follow
{
    position: relative;
    z-index: 2;
    margin: 12px 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.follow
{
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
}
.count
{
    color: var(--text-color);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.text
{
    color: var(--description-color);
    font-family: Poppins;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.content__title
{
    margin-top: 87px;
    color: var(--text-color);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.content__playlists
{
    margin-top: 15px;
}
</style>@/types/types