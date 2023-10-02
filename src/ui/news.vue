<template>
    <albumsComponent 
    :albums="albums"
    :slides-per-view="2.4525"
    />
    <songsComponent :tracks="tracks"/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import albumsComponent from '../ui/albums.vue';
import type { album } from '@/types/types';
import songsComponent from './songs.vue';
import type { ITrack } from '@/types/authTypes';


interface State {
    albums:album[]
}

export default defineComponent({
    components: {
        albumsComponent,
        songsComponent
    },
    computed:{
        tracks():ITrack[] {
            return this.$store.getters.getTracks
        }
    },
    async mounted() {  
        await this.$store.dispatch('getTracks')
        .catch((err:string) => {
            console.log(err)
        })
    },
    data():State {
        return {
            albums: [
                {
                    albumPic:'src/assets/news-album.svg',
                    artist:'Life Goes On',
                    name:'Oliver Tree',
                    options:{
                        containerHeigth:220
                    }
                },
                {
                    albumPic:'src/assets/news-album.svg',
                    artist:'Life Goes On',
                    name:'Oliver Tree',
                    options:{
                        containerHeigth:220
                    }
                },
                {
                    albumPic:'src/assets/news-album.svg',
                    artist:'Life Goes On',
                    name:'Oliver Tree',
                    options:{
                        containerHeigth:220
                    }
                },
                {
                    albumPic:'src/assets/news-album.svg',
                    artist:'Life Goes On',
                    name:'Oliver Tree',
                    options:{
                        containerHeigth:220
                    }
                },
                {
                    albumPic:'src/assets/news-album.svg',
                    artist:'Life Goes On',
                    name:'Oliver Tree',
                    options:{
                        containerHeigth:220
                    }
                }
            ]
        }
    }
})
</script>
<style>

</style>@/types/types