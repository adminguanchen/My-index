<template>
  <div>
     <router-link to="/dianying" :style="{color:color}" class="spans">{{biaoti}}</router-link>
     <router-link  to="/dianying" :style="{color:scolor}" class="ps">{{jianjie}}</router-link>
  </div>
</template>

<script>
  export default{
    components:{


    },
      props:["biaoti","jianjie","color","scolor"]
  }
</script>

<style scoped="">
  .spans{
    margin-top: 1.2rem;
    display: block;
    text-decoration: none;
  }
  .ps{
    margin: 0px;
    text-decoration: none;
    font-size: 0.12rem;
  }
</style>
