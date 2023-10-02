<template>
  <button @click.prevent="button.onClick" :class="['button','button_' + button.type,]" >
    {{button.text}}
  </button>
</template>
  
<script lang="ts">
import type { buttonProps } from '@/types/types';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  props:{
    button:{
      type: Object as PropType<buttonProps>,
      required:true
    }
  }
})

</script>
<style scoped>
.button
{
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  line-height: normal;
  cursor: pointer;
}
.button_default
{
  width: 335px;
  height: 70px;
  border-radius: 20px;
  background: var(--Spotify-Color, #1ED760);
  color: #FFF;
  font-size: 24px;
  font-weight: 500;
}
.button_small
{
  width: 160px;
  height: 85px;
  border-radius: 30px;
  background: var(--Spotify-Color, #1ED760);
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
}
.button_small-light
{
  width: 160px;
  height: 85px;
  border-radius: 30px;
  background: #FFF;
  color: #232323;
  font-size: 16px;
  font-weight: 600;
}
.button_large
{
  width: 335px;
  height: 80px;
  border-radius: 25px;
  background: var(--Spotify-Color, #1ED760);
  color: #FFF;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
}
.button_small-dark
{
  width: 160px;
  height: 85px;
  border-radius: 30px;
  background: #1C1B1B;
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
}
</style>@/types/types