<template>
  <div>
    <p @click="into()">豆瓣</p>
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
  div{
    font-size: 1rem;
    width: 3rem;
    color: #42B983;
  }
  p{
    font-size: 1.5rem;
    width: 3rem;
    margin:0;
  }
</style>
