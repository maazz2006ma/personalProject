<template>
  <div class="tabsName">
    <a href=""> {{ props.tabName }} </a></div>
</template>

<script setup>
let props = defineProps(['tabName'])
</script>

<style scoped>
.tabsName a{
  color: #2E3436;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  margin-left: 35px;
}
</style>