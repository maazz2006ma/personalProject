<template>
  <button :class="buttonVariant">{{ buttonName }}</button>
</template>
<script setup>
  let props = defineProps({ buttonVariant:String, buttonName:String })
</script>
<style scoped>
.classic{
  border-radius: 15px;
  border: 1px solid #3E6CF1;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 50px;
  width:100px;
  background-color: #FFF;
  border: none;
  font-family: Inter;
  color: black;
  font-weight: 400;
  &:hover {
    background-color: #E1E1E1;
  }

  &:active {
    background-color: #BFBFBF;
  } 
}
.modern{
  font-family: Inter;
  color: white;
  border: none;
  width: 100px;
  height: 50px;
  font-weight: 400;
  border-radius: 15px;
  background: #3E6CF1;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    background: #7594ef;
  }

  &:active {
    background: #3E6CF1;
  } 
}
</style>