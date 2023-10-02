<template>
    <div :mode="mode">
        <VueSlider :tooltip="'none'" 
        v-model="sliderValue" 
        :railStyle="{background: `var(--rail-color)`}" 
        :processStyle="{background: `var(--slider-color)`}" 
        :dotSize="6"
        :dotStyle="{backgroundColor: `var(--slider-color)`}"
        :max="currentDuration"
        :interval="0.000001"
        :lazy="true"
        :silent="true"
        @click="updateTime(sliderValue)"
        />
        <div class="time">
            <div class="time__current">
                <span>{{ formattedSliderValue }}</span>
            </div>
            <div class="time__duration">
                <span>{{ formattedCurrentDuration }}</span>
            </div>
        </div> 
    </div>
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
        currentDuration() {
            return this.$store.getters.getCurrentTrackDuration
        },
        formattedSliderValue() {
            return this.convertToTimeFormat(this.sliderValue);
        },
        formattedCurrentDuration() {
            return this.convertToTimeFormat(this.currentDuration);
        },
        mode()
        {
           return this.$store.getters.mode
        },
    },
    watch: {
        '$store.getters.getCurrentTime'(newTime) {
        this.sliderValue = newTime;
        },
        sliderValue(newValue) {
            if(newValue === this.currentDuration)
            {
                this.$store.commit('setIsPlaying', false);
            }
        },
        
    },
    methods:{
        updateTime(value:number) {
            console.log(value)
            this.$store.dispatch('setCurrentTime',value)
        },
        convertToTimeFormat(time:number) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);

            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');

            return `${formattedMinutes}:${formattedSeconds}`;
        }
    },

})
</script>
<style scoped>
.vue-slider
{
    height: 2px !important;
}
.time
{
  display: flex;
  justify-content: space-between;
  color: var(--description-color);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 6px;
}
</style>