<template>
    <button class="player__control-squarepath"></button>
    <button class="player__control-back" @click="previous()"></button>
    <button v-if="isPlaying === true" :class="($route.path === '/lyrics') ? 'player__control-pause_small' : 'player__control-pause '"  
        @click="play(currentTrack,currentIndex)">
    </button>
    <button v-else-if="isPlaying === false" :class="($route.path === '/lyrics') ? 'player__control-play_small' : 'player__control-play'"
        @click="play(currentTrack,currentIndex)">
    </button>
    <button class="player__control-next" @click="next()"></button>
    <button class="player__control-shuffle"></button>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
interface State {
    sliderValue:number
}

export default defineComponent({
    data():State {
        return{
          sliderValue:0
        }
    },
    components:{
        VueSlider,
    },
    computed:{
        currentTrack() {
            return this.$store.getters.getCurrentTrack
        },
        currentIndex() {
            return this.$store.getters.getCurrentIndex
        },
        isPlaying():boolean {
            return this.$store.getters.getIsPlaying
        },
    },
    methods:{
        play(url:string, id:Number) {
            const info = {
                url:url,
                id:id
            }
            this.$store.dispatch('play', info);
        },
        next() {
            this.$store.dispatch('next')
        },
        previous() {
            this.$store.dispatch('previous')
        },
    }
})
</script>
<style scoped>
.player__control-squarepath
{
    background-color: invert(var(--page-color));
    width: 28px;
    height: 28px;
    background-image: url('../assets/replay.svg');
    filter: var(--image-filter);
}
.player__control-back
{
    background-color: invert(var(--page-color));
    width: 28px;
    height: 28px;
    background-image: url('../assets/prev.svg');
    filter: var(--image-filter);
}
.player__control-play
{
    width: 70px;
    height: 70px;
    background-image: url('../assets/play.svg');
    background-color: invert(var(--page-color));
    background-position: center;
}
.player__control-play_small
{
    width: 50px;
    height: 50px;
    background-image: url('../assets/Play-small.svg');
    background-color: invert(var(--page-color));
}
.player__control-pause
{
    background-color: invert(var(--page-color));
    width: 70px;
    height: 70px;
    background-image: url('../assets/pause.svg');
}
.player__control-pause_small
{
    background-color: invert(var(--page-color));
    width: 50px;
    height: 50px;
    background-image: url('../assets/pause_small.svg');
}
.player__control-next
{
    background-color: invert(var(--page-color));
    width: 28px;
    height: 28px;
    background-image: url('../assets/next.svg');
    filter: var(--image-filter);
}
.player__control-shuffle
{
    background-color: invert(var(--page-color));
    width: 28px;
    height: 28px;
    background-image: url('../assets/shuffle.svg');
    filter: var(--image-filter);
}
</style>