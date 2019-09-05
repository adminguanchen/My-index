<template>
  <div>{{newarr}}</div>
</template>
<script>

  export default{
    //使用计算属性进行调用
    computed:{
      newarr(){
         return this.$store.getters.newarr;
      }
    }
  }
</script>

<style>


</style>
