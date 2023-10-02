<template>
    <Swiper :mode="mode" class="content__albums" :freeMode="true" :spaceBetween="28" :modules="modules" :slidesPerView="slidesPerView" >
        <SwiperSlide v-for="album in albums" class="album__item" :style="{height:album.options?.containerHeigth + 'px'}">
            <img :src="album.albumPic" class="album__item-pic" alt="picture">
            <div class="album__item-name" :style="{fontSize:album.options?.fontSize + 'px',textAlign:album.options?.textAlign}">{{album.name}}</div>
            <div v-if="album.artist" class="album__item-artist">{{album.artist}}</div>
        </SwiperSlide>
        {{slidesPerView}}
    </Swiper>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { album,sliderPerView } from '@/types/types'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';

export default defineComponent({
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
    props:{
        albums:{
            type: Array as PropType<album[]>,
            required: true
        },
        slidesPerView: {
            type: Number as PropType<sliderPerView>,
            required:true
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
<style>
.content__albums
{
    margin-top: 30px;
    width: 100%;
    display: flex;
    
}
.album__item
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.album__item-pic
{
    border-radius: 30px;
}
.album__item-name
{
    color: var(--text-color);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.album__item-artist
{
    color: var(--description-color);
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.content__albums .swiper-wrapper
{

    display: flex;
    flex-direction: row;
}
</style>@/types/types