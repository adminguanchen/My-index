<template>
  <div class="box">
    <router-link to="/home" class="ps">豆瓣</router-link>
  </div>
</template>

<script>
  export default{
    methods:{
      into(){
        //回�
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .box{
    width: 3rem;
    height: 3rem;
    float: left;
    line-height: 3rem;
  }
  div{
    font-size: 1rem;
    width: 3rem;
    color: #42B983;
  }
  .ps{
    font-size: 1.5rem;
    color: #42B983;
    text-decoration: none;
    width: 3rem;
    margin:0;
  }
</style>
