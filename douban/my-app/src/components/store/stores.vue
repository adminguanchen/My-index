<template>
  <div>{{obj}}</div>
</template>
<script>

  export default{
    //使用计算属性进行调用
    computed:{
      obj(){
         return this.$store.state.obj
      }
    }
  }
</script>

<style>


</style>
