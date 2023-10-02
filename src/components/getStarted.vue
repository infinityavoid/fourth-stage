<template>
    <div class="wrapper">
        <div class="content">
            <img src="../assets/Spotify_logo_with_text 1.svg" class="content__logo" alt="">
            <div class="content__text">
                <div class="content__text-title">Enjoy Listening To Music</div>
                <div class="content__text-description">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore 
                et dolore magna aliqua.</div>
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
import type { buttonProps } from '@/types/types';

interface State{
    button: buttonProps
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
                    this.$router.push({path:'/chooseMode'})
                },
                text:'Get Started',
                type:'default'
            }
        }
    }
})
</script>
<style scoped>
.wrapper
{
    background-image: url('../assets/get-started-image.svg');
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
    height: 242px;
    flex-direction: column;
    justify-content: space-between;
}
.content__text-title
{
    color: #FFF;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
}
.content__text-description
{
    color: rgba(255, 255, 255, 0.50);
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 282px;
    height: 92px;
    align-self: center;
}
.content__logo
{
    margin-top: 57px;
    width: 173px;
    height: 52px;
}
.content__image
{
    position: absolute;
}
</style>@/types/types