<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue';


export default defineComponent({
    mounted() {
        const player = document.getElementById('player') as HTMLAudioElement
        player.addEventListener('timeupdate', () => {
        if(!Number.isNaN(player.currentTime))
        {
            this.$store.dispatch('setTrackDuration', player.duration)
            this.$store.commit('setTime', player.currentTime) 
        }
      })
    },

})
</script>

<template>
<RouterView></RouterView>
    <audio id="player" preload="metadata"/>
</template>

<style scoped>

</style>
