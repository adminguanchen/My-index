<template>
  <div class="box">
    <!-- <router-link to="{name:'xiangqing',params:{id:v.id}}"> -->
      <div class="leftbox">
         <span>{{biaoti}}</span>
          <p>{{ftr}}</p>
      </div>
      <img :src="imgurl"/>
    <!-- </router-link> -->
  </div>

</template>

<script>
  export default{
    props:["biaoti","neirong","imgurl"],
    computed:{
      ftr(){
        return this.neirong.substring(0,50)
      }
    }
  }
</script>


<style scoped="">
.leftbox{
  float: left;
  width: 16rem;
  height: 9rem;
  margin-right: 1rem;
}
.leftbox span{
    display:inline-block ;
    width: 16rem;
    color: #000000;
  }
.leftbox p{
    margin-top:1.3rem;
    width: 16rem;
    display:inline-block ;
    height: 4rem;
    font-size: .18rem;
    color: #CCCCCC;
    overflow: hidden;
  }
img{
    float: left;
    width: 7rem;
    height: 8rem;
  }

</style>
