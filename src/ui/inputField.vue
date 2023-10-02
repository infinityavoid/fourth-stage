<template>
    <div class="input">
        <input type="text" class="input-textfield" :placeholder="input.placeholder"  @input="handleInput">
        <img v-if="input.password" class="hide-pass" src="../assets/eye-slash.svg" alt="">
    </div>
</template>

<script lang="ts">
import type { inputProps } from '@/types/types';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    props:{
        input:{
            type: Object as PropType<inputProps>,
            required:true
        }
    },
    methods: {
        handleInput(event:any) {
            const key = this.input?.key;
            const value = event.target.value;
            this.$emit('input-value', { key, value });
        }
    }
})

</script>
<style>
.input
{
    height: 60px;
    border-radius: 20px;
    border: var(--border-input);
    margin-top: 10px;
    background-color: var(--page-color);
    display: flex;
    width: 100%;
    text-indent: 10px;
    margin-bottom: 18px;
    overflow: hidden;
}
.input-textfield
{
    background-color: var(--page-color);
    margin-left: 10px;
    border: 0;
    padding: 0;
    width: 100%;
}
input 
{
    outline:none;
}
.hide-pass
{
    width: 20px;
    height: 20px;
    align-self: center;
    margin-right: 20px;
}
.hide-pass
{
    filter: invert(100%);
}
</style>@/types/types