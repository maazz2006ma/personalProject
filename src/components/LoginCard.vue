<template>
  <div class="container">
    <div class="left-block-items">
      <HelloWorld msg="EducareBook"></HelloWorld>
      <div>
        <form action="@submit.prevent">
          <div class="">
            <label class="label" for="Email">Email</label>
            <input type="text" placeholder="Enter your email id">
          </div>
          <div class="input-field">
            <label class="label" for="Password">Password</label>
            <input type="text"  placeholder="Enter your password">
            <img  class="password-image" src="src\assets\basil_eye-closed-solid.svg" alt="">
          </div>
          <div class="actions">
            <div class="remember">
              <input type="checkbox">
              <p>Remember Me</p>
            </div>
            <div>
              <a href="">Forgot Password?</a>
            </div>
          </div>
          <BaseButton button-text="Login" button-style="blue" :is-svg="false"></BaseButton>
        </form>
      </div>
    </div>
    <div class="right-block-items">
      <BaseButton to="/signup" :is-svg="false" button-text="SignUp" button-style="blue" style="width: 167px;height: 43px;">Signup</BaseButton>
      <!-- <base-button :is-svg="false" button-text="SignUp" button-style="blue" style="width: 167px;height: 43px;"></base-button> -->
      <img src="src\assets\reshot-illustration-website-design-U3PZXDSEVY 1.png" alt="">
    </div>
    
  </div>
</template>
<script setup lang="ts">
import HelloWorld from './HelloWorld.vue'
import BaseButton from './BaseButton.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;700;800&display=swap');
input[type="checkbox"]{
  width: 15px;
  height: 15px;
  color: white;
  background-color: white;
  border-radius: 2px;
  background: white;
}
a{
  color: #474BCA;

  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.remember{
 display: flex;
 align-items: center;
}
.actions{
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  font-size: small;
  width: 480px;
}
.input-field{
  position: relative;
  margin-bottom: 5px;
}
.password-image{
  position: relative;
  bottom: 35px;
  left: 430px;
}
input{
  width: 445px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #FFA3BE;
  border: none;
  padding-left: 20px;
  font-size: normal;
  line-height: normal;
}
input:focus{
  border: none;
}
.label{
  display: block;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 10px;
}
.container{
  background-color: #F9E6E6;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 50px;
}
@media screen and (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }

  .right-block-items img {
    margin-left: 0; /* Adjust as needed */
    margin-top: 20px; /* Adjust as needed */
  }
}
.right-block-items button{
  position: absolute;
  top: 10%;
  left: 80%;
}
.right-block-items img{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 500px;
  margin-top: 200px; 
}
</style>
