<template>
 
  <button v-if="!to" :class="buttonStyle" >
    <img src="src\assets\flat-color-icons_google.svg" alt="" v-if="isSvg">
    {{ props.buttonText }}
  </button>
  <RouterView v-else :to="to"  ></RouterView>
</template>
<script setup lang="ts">
let props = defineProps<{buttonStyle:string, buttonText:string, isSvg:boolean, to?:string}>() 
const inheritAttrs = true;

</script>

<style scoped>
.pink{
  display: flex;
  align-items: center;
  justify-content:center;
  width: 468px;
  height: 47px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #FFA3BE;
  border: none;
  color: white;
}
.blue{
  display: flex;
  align-items: center;
  justify-content:center;
  width: 468px;
  height: 47px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #474BCA;
  border: none;
  color: white;
}
</style>