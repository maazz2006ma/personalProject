<script setup lang="ts">
import BaseButton from './BaseButton.vue';
let props = defineProps<{ msg: string }>()

</script>

<template>
  <div class="title-container">
    <span class="title">{{ props.msg }}</span>
    <span class="login-now">{{ "Login Now" }}</span>
    <span class="greeting">Hi, Welcome back 👋 </span>
    <base-button button-style="pink" button-text="Login with Google" :is-svg="true"></base-button>
     <div class="box">
       <p class="inline-text">or Login with Email</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300&display=swap');


.inline-text{
  color: #000;
  font-size: small;
  max-width: 500px;
  margin: 10px auto;
}
.inline-text::before{
  content:" ";
  display: inline-block;
  height: 1px;
  width: 131px;
 margin-right: 15px;
 background: rgba(0, 0, 0, 0.25);

}
.inline-text::after{
  content:" ";
  display: inline-block;
  height: 1px;
  width: 160px;
  margin-left: 15px;
  background: rgba(0, 0, 0, 0.25);
}

 .title{
    color: #474BCA;
    font-family: Itim;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
 }
 .title-container{
  display: grid;
  grid-template-rows: 100px 50px 50px 50px 50px;
 }
 .login-now{
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style:normal;
  font-weight:bold;
  line-height: normal;
  margin-bottom: 5px;
 }
 .greeting{
  color: #000;

 }
</style>
