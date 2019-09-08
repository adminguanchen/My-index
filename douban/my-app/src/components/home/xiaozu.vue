<template>
  <div class="box">
    <div class="titles">
      <huitui></huitui>
      <routerlink-s class="links"></routerlink-s>
    </div>
    <div></div>

  </div>
</template>
<script>
  import huitui from '../huitui'
  import routerlinkS from '../../components/home/routerlinkS'
  export default{
    components:{
      routerlinkS,
      huitui
    }
  }
</script>

<style scoped="">
  .box{
    float: left;
    height: 3rem;
  }

  .box span{
    color:#42B983;
    float: left;
    display: block;
    font-size:2rem;
    width:4rem;
    height: 3rem;
  }
</style>
