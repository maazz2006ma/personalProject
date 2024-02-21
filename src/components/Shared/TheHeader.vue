<template>
  <div class="header">
    <div class="main-logo">
      <h1>Designely</h1>
    </div>
    <the-tabs>
    </the-tabs>
    <div class="actions">
      <base-button button-variant="classic" button-name="Sign In"> Sign In</base-button>
      <base-button button-variant="modern" button-name="Sign Up"> Sign Up</base-button>
    </div>
  </div>
</template>
<script setup>
 import BaseButton from '../Base/BaseButton.vue';
 import TheTabs from './TheTabs.vue';
</script>
<style scoped>
.header{
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.main-logo{
  flex: 2;
  display: flex;
  align-items: center;
}
.main-logo h1{
  color: #2E3436;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.actions{
 flex: 1;
 width: 200px;
 display: flex;
 align-items: center;
 justify-content:space-around ;
}
</style>
