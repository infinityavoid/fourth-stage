<template>
    <div>Compass in develop</div>
    <bgNavigation></bgNavigation>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import bgNavigation from '../ui/bgNavigation.vue'

export default defineComponent({
    components:{
        bgNavigation,
    },
})
</script>
<style>
</style>