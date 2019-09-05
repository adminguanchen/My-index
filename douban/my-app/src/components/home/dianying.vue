<template>
  <div class="box">
    <!-- <huitui></huitui> -->
    <span>豆瓣</span>
    <routerlink-s class="links"></routerlink-s>
    <div class="banner">

    </div>
  </div>
</template>
<script>
  // import huitui from '../huitui'
  import routerlinkS from '../../components/home/routerlinkS'
  export default{
    components:{
      routerlinkS,
      // huitui
    },
    data(){
      return{
        obj:[]
      }
    },
    created(){
      this.axios({
        url:"/moive",
        method:"get"
      }).then((data)=>{
        console.log(data.data.movie)
      })
    }
  }
</script>

<style scoped="">
  .box span{
    color:#42B983;
    float: left;
    display: block;
    font-size:2rem;
    width:4rem;
    height: 3rem;
  }

/*  .box{
    float: left;
  }
  .links{
    background-color: #42B983;
    float: left;
    height: 5rem;
    width: 10rem;
  } */
</style>
