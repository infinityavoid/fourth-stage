<template>
    <div :mode="mode" class="playlist">
        <div class="playlist__header">
            <div class="playlist__header-title">
                Playlist
            </div>
            <div class="playlist__header-show">
                See More
            </div>
        </div>
        <div class="playlist__track" v-for="(track, id) in tracks">
            <button :class="'playButton'" @click="play(track.url,id)"/>
            <div class="playlist__track-about">
                <div class="playlist__track-about_name">
                    {{track.name}}
                </div>
                <div class="playlist__track-about_artist">
                    {{track.artist.map(artist => artist.name).join(", ")}}
                </div>
            </div>
            <div class="playlist__track-time">2:34</div>
            <img src="../assets/heart.svg" class="playlist__track-follow" alt="">
        </div>
    </div>
</template>
<script lang="ts"> 
import { defineComponent } from 'vue';
import type { ITrack } from '@/types/authTypes';
import type { PropType } from 'vue';


export default defineComponent({
    props:{
        tracks:{
            type: Array as PropType<Array<ITrack>>,
            required:true
        }
    },
    methods:{
        play(url:string, id:Number) {
            const info = {
                url:url,
                id:id
            }
            this.$store.dispatch('play', info);
            this.$router.push({path:'/player'})
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
<style scoped>
.container
{
    position: relative;
    padding: 0 20px;
}
.playButton
{
    background-image: url('../assets/playButton.svg');
    width: 30px;
    height: 30px;
    border-radius: 50%;
    filter:var(--button-filter)
}
.playlist
{
    margin-top: 35px;
    width: 100%;
}
.playlist__header
{
    display: flex;
    justify-content: space-between;
}
.playlist__header-title
{
    color: var(--text-color);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.playlist__header-show
{
    color: var(--description-color);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.playlist__track
{
    margin-top: 10px;
    display: flex;
    width: 100%;
}
.playlist__track-about
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 160px;
    margin-left: 10px;
}
.playlist__track-about_name
{
    color: var(--text-color);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.playlist__track-about_artist
{
    color: var(--description-color);
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.playlist__track-time
{
    color: var(--description-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.playlist__track-follow
{
    width: 24px;
    height: 24px;
    margin-left: 60px;
    filter:var(--image-filter)
}
</style>