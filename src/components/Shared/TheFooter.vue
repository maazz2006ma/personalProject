<template>
  <div class="footer">
    <div class="left-content">
      <div class="heading"> Top category we have</div>
      <div class="sub-heading">Trending course category</div>
      <div class="paragraph">Various popular categories on our platform</div>
    </div>
    <div class="right-content">
      <base-card card-text="Graphic Designe" card-icon="/src/assets/web-design1.png"></base-card>
      <base-card card-text="Ui Ux Designe" card-icon="/src/assets/website1.png"></base-card>
      <base-card card-text="Logo Maker" card-icon="/src/assets/logo1.png"></base-card>
      <base-card card-text="Layout Design" card-icon="/src/assets/layout1.png"></base-card>
      <base-card card-text="Advertising Design" card-icon="/src/assets/ads 1.png"></base-card>
      <base-card card-text="Packaging Desing" card-icon="/src/assets/packaging1.png"></base-card>
    </div>
  </div>
</template>
<script setup>
  import BaseCard from '../Base/BaseCard.vue';
</script>
<style scoped>
.heading{
  margin-bottom: 10px;
  color: #2E3436;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.sub-heading{
  margin-bottom: 10px;
  color: #3E6CF1;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.paragraph{
  margin-bottom: 10px;
  color: rgba(46, 52, 54, 0.50);
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.footer{
  flex: 2;
  width: 100%;
  display: flex;
}
.left-content{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.right-content{
  flex: 2;
  display: grid;
  
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 2fr 2fr 2fr ;
  column-gap: 40px;
  row-gap: 60px;
}
@media (max-width: 768px) {
  .footer{
    flex-direction: column;
  }
  .left-content{
    order: 1;
  }
  .right-content{
    order: 2;
  }
}
@media (max-width: 768px) {
  .right-content {
    /* Define the grid template for smaller screens (2 columns and 3 rows) */
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
@media (max-width: 200px) {
  .right-content {
    /* Define the grid template for smaller screens (2 columns and 3 rows) */
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
</style>