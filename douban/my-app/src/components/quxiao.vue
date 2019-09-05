<template>
    <div class="title">
      <div @click="into()">
        <span>取消</span>
      </div>
      <div>
        <span>登录豆瓣</span>
      </div>
      <div></div>
    </div>
</template>

<script>
  export default{
    methods:{
      into(){
        //回退
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .title{
    height: 2.2rem;
    width: 100%;
  }
  .title :nth-child(1){
    float: left;
    width: 2rem;
    height: 2rem;
  }
  .title :nth-child(1) span{
    color: #42B983;
  }
  .title :nth-child(2){
    float: left;
    margin-left: .5rem;
    width: 18rem;
    float: left;
    height: 2rem;
    border-bottom: 0.08rem solid #ccc;
  }

.title :nth-child(2) span{

    color: black;
    width: 18rem;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
  }
</style>
