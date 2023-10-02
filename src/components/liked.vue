<template>
    <div class="page" :mode="mode">
        <img src="../assets/liked-img.svg" class="header-rectangle" alt="">
        <div class="container">
            <headerVue
            class="likedPage__header"
            :header-nav="headerNav"
            />
            <div class="liked__info">
                <div class="liked__info-name">Billie Eilish</div>
                <div class="liked__info-stats">2 Album, 67 Single Music</div>
                <div class="liked__info-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="liked__album">Album</div>
            <albumsComponent
            :albums="albums"
            :slides-per-view="sliderPerView"
            />
            <songsComponent :tracks="tracks"/>
        </div>
    </div>
    <bgNavigation></bgNavigation>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import headerVue from '../ui/headerNav.vue';
import bgNavigation from '../ui/bgNavigation.vue';
import albumsComponent from '../ui/albums.vue';
import type {  headerNav, album,sliderPerView } from '@/types/types';
import songsComponent from '../ui/songs.vue';
import type { ITrack } from '@/types/authTypes';

interface State {
    headerNav: headerNav,
    albums: album[],
    sliderPerView:sliderPerView
}

export default defineComponent({
    data(): State {
        return {
            headerNav:{
                options:{
                    leftContent:{
                        content:'back',
                        onClick:() => {
                            this.$router.push({path:'/main'})
                        },
                        type:'filled'
                    },
                
                    rightContent:{
                        content:'menu',
                        onClick:() => console.log('work')
                    },
                }
            },
            sliderPerView:3,
            albums: [
                {
                    albumPic:'src/assets/liked-album.svg',
                    name:'Dont Smile At Me',
                    options:
                    {
                        fontSize:10,
                        containerHeigth:110,
                        textAlign:'center'
                    }
                },
                {
                    albumPic:'src/assets/liked-album.svg',
                    name:'When We All Fall...',
                    options:
                    {
                        fontSize:10,
                        containerHeigth:110,
                        textAlign:'center'
                    }
                },
                {
                    albumPic:'src/assets/liked-album.svg',
                    name:'Live at Third Ma...',
                    options:
                    {
                        fontSize:10,
                        containerHeigth:110,
                        textAlign:'center'
                    }
                },
                {
                    albumPic:'src/assets/liked-album.svg',
                    name:'Dont Smile At Me',
                    options:
                    {
                        fontSize:10,
                        containerHeigth:110,
                        textAlign:'center'
                    }
                },
            ]
        }
    },
    computed:{
        tracks():ITrack[] {
            return this.$store.getters.getTracks
        },
        mode()
        {
           return this.$store.getters.mode
        },
    },
    async mounted() {  
        await this.$store.dispatch('getTracks')
        .catch((err:string) => {
            console.log(err)
        })
    },
    components:{
        headerVue,
        bgNavigation,
        albumsComponent,
        songsComponent
    },
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
    pointer-events: none;
    position: absolute;
    z-index: 1;
    right: 0;
    left: 0;
}
.likedPage__header
{
    justify-content: space-between;
    position: relative;
    z-index: 2;
}
.liked__info
{
    margin-top: 165px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.liked__info-name
{
    color: var(--text-color);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.liked__info-stats
{
    color: var(--description-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.liked__info-desc
{
    color: var(--description-color);
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 230px;
    margin-top: 7px;
}
.liked__album
{
    margin-top: 26px;
    color: var(--text-color);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
</style>@/types/types