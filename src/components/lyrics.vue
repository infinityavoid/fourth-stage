<template>
    <div class="wrapper" :mode="mode">
        <div class="container">
            <headerVue
            class="playerHeader"
            :header-nav="headerNavOptions"
            />
            <div class="lyrics">
                <h2 class="lyrics__title">Verse 1</h2>
                <p class="lyrics__text">
                    White shirt now red, my bloody nose<br>
                    Sleepin', you're on your tippy toes<br>
                    Creepin' around like no one knows<br>
                    Think you're so criminal<br>
                    Bruises on both my knees for you<br>
                    Don't say thank you or please<br>
                    I do what I want when I'm wanting to<br>
                    My soul? So cynical<br>
                </p>
                <h2 class="lyrics__title">Verse 2</h2>
                <p class="lyrics__text">
                    So you're a tough guy<br>
                    Like it really rough guy<br>
                    Just can't get enough guy<br>
                    Chest always so puffed guy<br>
                    I'm that bad type<br>
                </p>
            </div>
        </div>
        <div class="mini-player">
            <div class="player__track-info" >
                <img  src="../assets/track-liked-mini.svg" class="player__track-image_mini" alt="">
                <div class="player__track-text">
                    <div class="player__track-name">Bad Guy</div>
                    <div class="player__track-artist">Billie Eilish</div>
                </div>
            </div> 
            <slider class="slider"/>
            <div class="player__control">
                <playerControls/>
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
                        onClick:() => console.log('work'),
                        type:'filled'
                    },
                    rightContent:{
                        content:'menu',
                        onClick:() => console.log('work')  
                    },
                    text:'Bad Guy'
                }
            }
        },
        mode()
        {
           return this.$store.getters.mode
        }
    }
})
</script>
<style scoped>
.wrapper 
{
    display: flex;
    height: 812px;
    flex-direction: column;
    position: relative;
    background-image: url('../assets/lyrics-bg.svg');
    background-repeat: no-repeat;
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
.mini-player
{
    background-color: var(--page-color);
    position: absolute;
    right: 0;
    left: 0;
    padding: 0 20px;
    bottom: 0;
}
.player__control
{
    width: 100%;
    height: 50px;
    margin-bottom: 23px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.player__track-info
{
    margin-top: 13px;
    display: flex;
}
.player__track-text
{
    width: 50%;
    margin-left: 12px;
}
.player__track-name
{
    color: var(--text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.player__track-artist
{
    color: var(--description-color);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.slider
{
    margin-top: 15px;
}
.lyrics
{
    margin-top: 24px;
}
.lyrics__title
{
    color: #FFF;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.lyrics__text
{
    color: rgba(255, 255, 255, 0.50);
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    line-height: 36px;
    margin-left:35px ;
}
</style>@/types/types