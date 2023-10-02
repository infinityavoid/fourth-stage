<template>
    <div class="page" :mode="mode">
        <div class="container">
            <headerVue
            class="playerHeader"
            :header-nav="headerNavOptions"
            />
            <img class="player__track-img" src="../assets/player-img.svg" alt="">
            <div class="player">
                <div class="player__track-info">
                    <div class="player_track-text">
                        <div class="player__track-name">Bad Guy</div>
                        <div class="player__track-artist">Billie Eilish</div>
                    </div>
                    <img class="player__track-switch" src="../assets/track-liked.svg" alt="">
                </div> 
                <slider class="slider"/>
                <div class="player__control">
                    <playerControls/>
                </div>
                <div class="lyrics-switch">
                    <button class="lyrics-switch__button" @click="switchLyrics"></button>
                    <div class="lyrics-switch__text">lyrics</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import headerVue from '../ui/headerNav.vue';
import type { headerNav, trackname } from '@/types/types';
import slider from '../ui/slider.vue'
import playerControls from '../ui/playerControls.vue'

interface State {
    trackName:trackname
}
export default defineComponent({
    components:{
        headerVue,
        slider,
        playerControls
    },
    data():State {
        return {
            trackName:'Bad Guy'
        }
    },
    methods:{
        switchLyrics()
        {
            this.$router.push({path:'/lyrics'})
        }
    },
    computed: {
        headerNavOptions():headerNav {
            return {
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
            }
        },
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
.playerHeader
{
    position: relative;
    z-index: 2;
    justify-content: space-between;
}
.player__track-img
{
    margin-top: 41px;
}
.player__control
{
    width: 100%;
    height: 105px;
    margin: 25px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.lyrics-switch
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.lyrics-switch__button
{
    background-color: invert(var(--page-color));
    background-image: url('../assets/chevron.up.svg');
    width: 28px;
    height: 28px;
    filter: var(--image-filter);
}
.lyrics-switch__text
{
    color: var(--description-color);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.player__track-info
{
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
}

.player__track-name
{
    color: var(--text-color);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.player__track-artist
{
    color: var(--description-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.slider
{
    margin-top: 15px;
}
</style>@/types/types