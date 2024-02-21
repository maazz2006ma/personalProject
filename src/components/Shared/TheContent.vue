<template>
  <div class="content">
    <div class="left-content">
      <div class="heading"> 
        <span class="black-text"> Exceedingly Good
        learn design with
          <span style=" color: #3E6CF1;">Designely</span>
        </span>
      </div>
      <div class="sub-heading">
        <span>Publish your designs, impress your friends choose lessons that you like anytime and anywhere with Designely</span>
      </div>
      <div class="actions">
        <base-button button-variant="modern" button-name="Sign Up" style=" margin-right: 20px;"></base-button>
        <base-button button-variant="classic" style="width: 160px;;" button-name="Learn More"></base-button>
      </div>
    </div>
    <div class="right-content">
      <img src="../../assets/illustration1.png" alt="">
    </div>
  </div>
</template>
<script setup>
  import BaseButton from '../Base/BaseButton.vue';
</script>
<style scoped>
.heading .black-text{
  color: #2E3436;
  text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  font-family: Inter;
  font-size: 80px;
  font-style: normal;
  font-weight: 600;
  line-height: 100px;
}
.heading{
  flex: 2;
}
.sub-heading{
  color: rgba(46, 52, 54, 0.50);
  margin-top: 20px;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  flex:1;
  display: flex;
  width:500px;
  justify-content: start;
  margin-bottom: 20px;
}
.actions{
  flex: 1;
  display: block;
}
.content{
  flex: 4;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.left-content{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.right-content{
  flex:1;
  position: relative;
}
.right-content img{
  width: 750px;
  height: 650px;
  overflow: hidden;
}
@media (max-width: 768px) {
  .heading{
    font-size: 60px;
    text-align: center;
  }
  .content {
    flex-direction: column;
  }

  .left-content {
    order: 1;
  }

  .right-content {
    order: 2;
  }
}

</style>