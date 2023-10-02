<template>
    <div class="page" :mode="mode">
        <div class="container">
            <headerVue
            :header-nav="headerNav"
            class="main__header"
            />
            <div class="header-info">
                <div class="header-info__rectangle">
                    <div class="header-info__text">
                        <div class="header-info__text-tiny">New Album</div>
                        <div class="header-info__text-bold">Where Are <br>You</div>
                        <div class="header-info__text-tiny">Ollane,<br> Miyagi & Andy Panda</div>
                    </div>
                    <img src="../assets/info-cover.svg" class="header-info__picture" alt="">
                </div>
            </div>
            <div class="content">
                <menuSection
                :active-filter="activeFilter"
                @set-filter="setFilter"
                />
                <news v-if="activeFilter ==='News'">
                </news>
                <div v-else class="content__noactiveFilter">
                    In developing
                </div>
            </div>
        </div>
    </div>
    <bgNavigation></bgNavigation>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import menuSection from '../ui/menuSection.vue';
import bgNavigation from '../ui/bgNavigation.vue'
import news from '../ui/news.vue';
import headerVue from '../ui/headerNav.vue';
import type { Filter, headerNav } from '@/types/types';

interface State {
    activeFilter:Filter,
    headerNav: headerNav
}

export default defineComponent({
    components:{
        menuSection,
        bgNavigation,
        news,
        headerVue
    },
    data(): State {
        return {
            activeFilter:'News',
            headerNav:{
                options:{
                    leftContent:{
                        content:'magnify',
                        onClick:() => {
                            console.log('work')
                        }
                    },
                    rightContent:{
                        content:'menu',
                        onClick:() => {
                            console.log('work')
                        }
                    },
                    logo:true
                }
            }
        }
    },
    computed:{
        mode()
        {
           return this.$store.getters.mode
        },
    },
    methods: {
        setFilter(filter:Filter)
        {
            this.activeFilter = filter
        }
    },
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
.main__header
{
    justify-content: space-between;
}
.header-info
{
    margin-top: 26px;
    position: relative;
}
.header-info__rectangle
{
    width: 335px;
    height: 140px;
    border-radius: 30px;
    background: var(--Spotify-Color, #1ED760);
    display: flex;
}
.header-info__text
{
    padding: 15px 0 15px 15px;
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.header-info__text-tiny
{
    color: rgba(255, 255, 255, 0.90);
    font-size: 10px;
    font-weight: 400;
}
.header-info__text-bold
{
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
}
.header-info__picture
{
    position: absolute;
    right: 19px;
    top: -22px;
}
.content
{
    margin-top: 40px;
}
.content__noactiveFilter
{
    text-align: center;
    margin-top: 30px;
}
</style>@/types/types