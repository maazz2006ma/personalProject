<template>
  <div class="card">
    <div class="icon">
      <div class="circle">
        <img :src="imageUrl" alt="">
      </div>
    </div>
    <div class="content"> {{  props.cardText }}</div>
  </div>
</template>
<script setup>
let props = defineProps(['cardText','cardIcon'])
const imageUrl = props.cardIcon
</script>
<style scoped>
.icon{
  flex:2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle{
  border-radius: 45px;
  width: 70px;
  height: 70px;
  background-color: #EFB829;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle img{
  width: 40px;
  height: 40px;
}
.content{
  flex:4;
  display: flex;
  align-items: center;
  justify-content: start;
  color: #2E3436;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.card{
  width: 100%;
  height: 100px;
  background-color: white;
  border-radius: 32px;
  display: flex;
  flex-direction: row;
}
</style>