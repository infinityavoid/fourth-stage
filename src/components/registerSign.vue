<template>
    <div class="page" :mode="mode">
        <img src="../assets/lines-top.svg" class="gradient-top" alt="">
        <div class="content">
            <img src="../assets/Spotify_logo_with_text 1.svg" class="content__logo" alt="">
            <div class="content__text">
                <div class="content__text-title">Enjoy Listening To Music</div>
                <div class="content__text-description">Spotify is a proprietary Swedish audio streaming and meda services provider</div>
                <div class="switch">
                    <submitButton v-for="button in buttons.buttons"
                    :button="button"
                    />
                </div>
            </div>
        </div>
        <img src="../assets/lines-bottom.svg" class="gradient-bottom">
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import submitButton from '../ui/submitButton.vue';
import type { buttonProps } from '@/types/types';
import '../pageMode/$mode.css'

interface State{
    buttons: buttonProps[]
}


export default defineComponent({
    components:{
        submitButton
    },
    computed:{
        mode()
        {
           return this.$store.getters.mode
        },
        buttons():State {
            return {
                buttons:[
                {
                    onClick:()=>
                    {
                        this.$router.push({path:'/register'})
                    },
                    text:'Register',
                    type: 'small'
                },
                {
                    onClick:()=>
                    {
                        this.$router.push({path:'/signIn'})
                        console.log('a')
                    },
                    text:'Sign In',
                    type: this.mode === 'dark' ? 'small-dark' : 'small-light'
                }
                ]
            }

        },
    },
})
</script>
<style scoped>
.gradient-top
{
    position: absolute;
    right: 0;
    filter: invert(100%);
}
.page
{
    height: 100%;
    background-color: var(--page-color);
}
.content
{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}
.content__text
{
    margin-top: 86px;
    display: flex;
    height: 242px;
    flex-direction: column;
    justify-content: space-between;
}
.content__text-title
{
    color: var(--text-color);
    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.content__text-description
{
    color: var(--description-color);
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 296px;
    height: 47px;
    align-self: center;
}
.content__logo
{
    width: 173px;
    height: 52px;
    margin-top: 146px;
}
.content__image
{
    position: absolute;
}
.switch
{
    display: flex;
    margin: 0 auto;
    gap: 16px;
    height: 85px;
}
.switch__register
{
    width: 160px;
    height: 85px;
    border-radius: 30px;
    background: var(--Spotify-Color, #1ED760);
}
.switch__sign-in
{
    width: 160px;
    height: 85px;
    border-radius: 30px;
    background: #FFF;
}
.switch__text-reg
{
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.switch__text-sign
{
    color: #232323;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.gradient-bottom
{
    pointer-events: none;
    position: absolute;
    right: 0;
    bottom: 0;
    filter: var(--image-filter)
}
</style>@/types/types