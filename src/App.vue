
<template>
  <div class="main-container">
    <the-header></the-header>
    <the-content></the-content>
    <the-footer></the-footer>
  </div>
</template>

<script setup>
  import TheHeader from './components/Shared/TheHeader.vue';
  import TheContent from './components/Shared/TheContent.vue'
  import TheFooter from './components/Shared/TheFooter.vue'
</script>
<style scoped>
.main-container{
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  width: 100%;
  

}


</style>
