<template>
    <div class="wrapper">
        <div class="content">
            <img src="../assets/Spotify_logo_with_text 1.svg" class="content__logo" alt="">
            <div class="content__text">
                <div class="content__text-title">Choose Mode</div>
                <div class="switch">
                    <div class="switch__container">
                        <button class="switch__light" @click="setLigth"></button>
                        <div class="switch__text">light</div>  
                    </div>
                    <div class="switch__container">
                        <button class="switch__dark" @click="setDark"></button>
                        <div class="switch__text">dark</div>  
                    </div>
                </div>
                <submitButton
                :button="button"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import submitButton from '../ui/submitButton.vue';
import type { buttonProps, mode } from '@/types/types';

interface State{
    button: buttonProps,
    mode:mode
}

export default defineComponent({
    components:{
        submitButton
    },
    data():State{
        return {
            button:{
                onClick:()=>
                {
                    this.$router.push({path:'/regSign'})
                },
                text:'Continue',
                type:'default'
            },
            mode:'light'
        }
    },
    methods:{
        setLigth() {
            this.mode = 'light'
            localStorage.setItem('mode',this.mode)
            this.$store.dispatch('setMode',this.mode)
        },
        setDark() {
            this.mode = 'dark'
            localStorage.setItem('mode',this.mode)
            this.$store.dispatch('setMode',this.mode)
        },
    },
})
</script>
<style scoped>
.wrapper
{
    background-image: url('../assets/choose-mode-image.svg');
    height: 100%;
}
.content
{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 755px;
    justify-content: space-between;
}
.content__text
{
    display: flex;
    height: 266px;
    flex-direction: column;
    justify-content: space-between;
}
.content__text-title
{
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.switch
{
    width: 210px;
    height: 80px;
    display: flex;
    align-self: center;
    position: relative;
    justify-content: space-between;
}
.switch__container
{
    display: flex;
    flex-direction: column;
    height: 110px;
    justify-content: space-between;
}
.switch__light
{
    width: 80px;
    height: 80px;
    background-image: url('../assets/light-switch.svg');
    background-color: #8F8F8F42;
    fill: rgba(143, 143, 143, 0.26);
    backdrop-filter: blur(17px);
    border-radius: 50%;
}
.switch__dark
{
    width: 80px;
    height: 80px;
    background-image: url('../assets/dark-switch.svg');
    background-color: #8F8F8F42;
    fill: rgba(143, 143, 143, 0.26);
    backdrop-filter: blur(17px);
    border-radius: 50%;
}
.switch__text
{
    color: rgba(255, 255, 255, 0.50);
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.content__logo
{
    margin-top: 57px;
    width: 173px;
    height: 52px;
}
.content__button
{
    width: 335px;
    height: 70px;
    border-radius: 20px;
    background: var(--Spotify-Color, #1ED760);
    align-self: center;
}
.content__button-text
{
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.content__image
{
    position: absolute;
}
</style>@/types/types