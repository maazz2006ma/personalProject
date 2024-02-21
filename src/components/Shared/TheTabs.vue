<template>
  <div class="tabs">
    <base-tabs tab-name="Home"></base-tabs>
    <base-tabs tab-name="Category"></base-tabs>
    <base-tabs tab-name="Course"></base-tabs>
    <base-tabs tab-name="Price"></base-tabs>
    <base-tabs tab-name="Community"></base-tabs>
  </div>
</template>
<script setup>
 import BaseTabs from '../Base/BaseTabs.vue';
</script>
<style scoped>
.tabs{
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
}
</style>