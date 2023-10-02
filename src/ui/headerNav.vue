<template>
    <div class="header">
        <button v-if="headerNav.options.leftContent?.content == 'back'" 
            :class="(headerNav.options.leftContent?.type === 'filled') ? 'header__back-filled' : 'header__back'" 
            @click="headerNav.options.leftContent.onClick()"
            alt="">
        </button>
        <button v-if="headerNav.options.leftContent?.content == 'magnify'"
            @click="headerNav.options.leftContent.onClick()"
            class="header__magnify" alt=""></button>
        <img v-if="headerNav.options.logo" src="../assets/Spotify_logo_with_text 1.svg" class="header__logo" alt="">
        <div class="header__text" v-if="headerNav.options.text">{{headerNav.options.text}}</div>
        <button v-if="headerNav.options.rightContent?.content == 'menu'" 
        @click="headerNav.options.rightContent.onClick()"
        class="header__menu" alt=""></button>
    </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { headerNav } from '@/types/types';

export default defineComponent({
    props:{
        headerNav:{
            type:Object as PropType<headerNav>,
            required:true
        }
    }
})
</script>
<style>
.header
{
    width: 295px;
    padding-top: 55px;
    display: flex;
    margin-left: 20px;
    align-items: center;
}
.header__back
{
    width: 32px;
    height: 32px;
    filter: var(--button-filter);
    background-image: url('../assets/back.svg');
    border-radius: 50%;
}
.header__back-filled
{
    width: 32px;
    height: 32px;
    filter: invert(65%);
    opacity: 0.8;
    background-image: url('../assets/back.svg');
    border-radius: 50%;
}
.header__magnify
{
    background-color: white;
    width: 32px;
    height: 32px;
    background-image: url('../assets/magnifyingglass.svg');
    background-color: invert(var(--page-color));
    filter: var(--image-filter);
}
.header__menu
{
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
    background-image: url('../assets/menu.svg');
    background-position: center;
    background-color: invert(var(--page-color));
    filter: var(--image-filter);
}
.header__text
{
    color: #FFF;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
</style>@/types/types