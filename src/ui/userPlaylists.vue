<template>
    <Swiper class="playlists" :freeMode="true" :slidesPerView="3.6"  :direction="'vertical'" :modules="modules" >
        <SwiperSlide v-for="playlist in playlists" class="playlists__item">
            <div v-for="track in playlist?.tracks" class="playlists__item-img">
                <img class="playlists__img" :src="track?.trackImg" alt="">
            </div>
        </SwiperSlide>
    </Swiper>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { playlists} from '@/types/types';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';
export default defineComponent({
    props:{
        playlists:{
            type: Array as PropType<Array<playlists>>,
            required:true
        }
    },
    components:
    {
        Swiper,
        SwiperSlide
    },
    setup() {
      return {
        modules: [FreeMode],
      };
    },
})
</script>
<style >
.playlists
{
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 15px;
}
.playlists__item
{
    margin-top: 15px;
    width: 134px;
    height: 160px;
    border-radius: 40px;
    background: var(--page-color);
    box-shadow: var(--playlist-shadow);
    display: flex;
    flex-wrap: wrap;
    padding:13px;
    gap: 10px;
}
.playlists__item-img
{
    width: 62px;
    height: 62px;
}
.playlists__img
{
    border-radius: 20px;
}
.playlists .swiper-wrapper
{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.playlists .swiper-slide
{
    height: auto !important;
}
</style>@/types/types