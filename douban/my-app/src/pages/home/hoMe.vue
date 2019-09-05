<template>
  <div class="box">
    <span>豆瓣</span>
    <routerlink-s class="links"></routerlink-s>
    
    
    
    <div class="banners">
      <ban-ner></ban-ner>
    </div>
    <div class="list">
      <li-st class="lists"></li-st>
    </div>
  </div>
</template>

<script>
  import routerlinkS from '../../components/home/routerlinkS'
  import banNer from '../../components/home/banNer'
  import liSt from '../../components/home/liSt'
  export default{
    components:{
      routerlinkS,
      banNer,
      liSt
    }
  }
</script>


<style scoped>
  .box span{
    color:#42B983;
    float: left;
    display: block;
    font-size:2rem;
    width:4rem;
    height: 3rem;
  }
  .banners{
    float: left;
  }
  .lists{
    float: left;
  }
  .box .links{
    float: left;
    width:20rem;
    height: 3rem;
  }
</style>
