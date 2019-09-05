<template>
  <div>
    <p>{{obj}}</p>
    <!-- 绑定事件 -->
    <button @click="into()">加</button>
  </div>

</template>
<script>

  export default{
    //使用计算属性进行调用
    computed:{
      obj(){
        return this.$store.state.obj
      }
    },
    methods:{
      into(){
         return this.$store.commit("chen");
      }
    }
  }
</script>

<style>


</style>
