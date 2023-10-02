<template>
    <div class="content__menu" :mode="mode">
        <button class="content__menu-section" 
        :class="{'content__menu-section_selected':activeFilter === filter}" 
        v-for="filter in filters"
        @click="setFilter(filter)">{{filter}}
        <div v-show="activeFilter === filter" class="underline"></div></button>
    </div>
</template>
<script lang="ts">
import {defineComponent, type PropType} from 'vue';
import type { Filter } from '@/types/types';
interface State{
    filters: Filter[]
}

export default defineComponent({
    props: {
        activeFilter: {
            type: String as PropType<Filter>,
            required: true
        }
    },
    data():State {
        return{
            filters:['News','Video','Artists','Podcasts']
        }
    },
    methods:{
        setFilter(filter:Filter)
        {
            this.$emit('setFilter',filter)
        }
    },
    emits: {
        setFilter:(filter:Filter) => filter
    },
    computed:{
        mode()
        {
           return this.$store.getters.mode
        },
    },
})
</script>
<style scoped>
.content__menu
{
    display: flex;
    justify-content: space-between;
}
.content__menu-section
{
    background-color: var(--page-color);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--description-color);
    display: flex;
    flex-direction: column;
}
.content__menu-section_selected
{
    color: var(--text-color)
}
.underline
{
    width: 28px;
    height: 3px;
    background: var(--Spotify-Color, #1ED760);
    border-radius: 0px 0px 2px 2px;
    align-self: center;
}

</style>@/types/types