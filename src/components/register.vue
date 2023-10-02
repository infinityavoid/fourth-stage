<template>
    <div class="page" :mode="mode">
        <div class="container">
            <headerVue class="regSign__header"
            :header-nav="headerNav"
            />
            <div class="content">
                <div class="content__text">
                    <div class="content__text-title">Register</div>
                    <div class="content__text-description">If you need any support<span class="content__text-description_link"> click here</span></div>
                </div>
                <div class="content__input">
                    <inputField v-for="input in inputs"
                    :input="input" :value="userData"
                    @input-value="handleInputValue"/>
                </div>
                <submitButton
                :button="button"
                />
            </div>
            <div class="footer">
                <div class="footer__text">dou you have an account?<span class="footer__text-link"> sign in</span></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import submitButton from '../ui/submitButton.vue';
import inputField from '../ui/inputField.vue'
import headerVue from '../ui/headerNav.vue';
import type { buttonProps,headerNav,inputProps } from '@/types/types';
import type { IUser } from '../types/authTypes'

interface State{
    button: buttonProps,
    inputs: inputProps[],
    headerNav: headerNav,
    userData: IUser
}

export default defineComponent({
    components:{
        submitButton,
        inputField,
        headerVue
    },
    methods: {
        handleInputValue({ key, value }: { key: inputProps["key"], value: string }) {
        // Обновление соответствующего ключа в объекте `userData` на основе переданных `key` и `value`
        this.userData[key] = value;
        }
    },
    computed:{
        mode()
        {
           return this.$store.getters.mode
        },
    },
    data():State{
        return {
            userData:{} as IUser,
            button:{
                onClick:async ()=>
                {
                    await
                    this.$store.dispatch('register', this.userData)
                    .then(()=> this.$router.push({path:'/Main'}))
                    .catch((err:string) => {
                        console.log(err)
                    })
                },
                text:'Register',
                type:'large'
            },
            inputs:[
                {
                    placeholder:'Full name',
                    key:'fullname'
                },
                {
                    placeholder:'Enter Email',
                    key:'email'
                },
                {
                    placeholder:'Enter Username',
                    key:'username'
                },
                {
                    placeholder:'Password',
                    password:true,
                    key:'password'
                },
            ],
            headerNav:{
                options:{
                    leftContent:{
                        content:'back',
                        onClick:() => console.log('work')
                    },
                    logo:true
                }
            }
        }
    }
})
</script>
<style scoped>
.page
{
    height: 100%;
    background-color: var(--page-color);
}
.container
{
    padding: 0 20px;
}
.regSign__header
{
    gap:46px;
    margin-left: 20px;
}
.content
{
    margin-top: 18px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}
.content__text
{
    display: flex;
    height: 90px;
    flex-direction: column;
    justify-content: space-between;
}
.content__text-title
{
    color: var(--text-color);
    text-align: center;
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.content__text-description
{
    color: var(--description-color);
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
}
.content__text-description_link
{
    color: rgba(0, 255, 56, 0.50);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
}
.content__input
{
    margin-top: 16px;
    width: 100%;
}
.content__recovery
{
    color: rgba(0, 0, 0, 0.70);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    align-self: flex-start;
    margin-top: 18px;
}
.footer
{
    display: flex;
    justify-content: center;
    margin-top: 100px;
}
.footer__text
{
    color: var(--text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
}
.footer__text-link
{
    color: var(--Spotify-Color, #1ED760);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
}
</style>@/types/types