<template>
  <!-- 顶部导航 -->
  <div>
    <div class="box">
      <router-link to="/home" class="topwenzi">豆瓣</router-link>
    <routerlink-s></routerlink-s>
    </div>


    <!-- banner -->
    <div class="bigbox">
      <gengduo class="gd"></gengduo>
      <div class="box1">
          <zidianying  v-for="(v,i) in obj" :key="i" :imgurl="v.images" :biaoti="v.title" class="zidian"></zidianying>
      </div>
      <xingxing></xingxing>
    </div>
    <br>
    <div class="bigbox">
      <gengduo class="gd"></gengduo>
      <div class="box1">
          <zidianying  v-for="(v,i) in obj" :key="i" :imgurl="v.images" :biaoti="v.title" class="zidian"></zidianying>
      </div>
      <xingxing></xingxing>
    </div>
    <br>
    <div class="bigbox">
      <gengduo class="gd"></gengduo>
      <div class="box1">
          <zidianying  v-for="(v,i) in obj" :key="i" :imgurl="v.images" :biaoti="v.title" class="zidian"></zidianying>
      </div>
      <xingxing></xingxing>
    </div>
    <br>
    <div class="bigbox">
      <gengduo class="gd"></gengduo>
      <div class="box1">
          <zidianying  v-for="(v,i) in obj" :key="i" :imgurl="v.images" :biaoti="v.title" class="zidian"></zidianying>
      </div>
      <xingxing></xingxing>
    </div>
    <div>

      <goodmoive></goodmoive>
      <div class="neikuang">
        <goodmoives v-for="(v,i) in arr" :neirong="v.title" :color="v.color" class="dianneirong" :links="v.line"></goodmoives>
      </div>

    </div>

  </div>
</template>
<script>
  import routerlinkS from '../../components/home/routerlinkS'
  import zidianying from '../../components/home/zidianying'
  import gengduo from '../../components/home/gengduo'
  import xingxing from '../../components/home/xingxing'
  import goodmoive from '../../components/home/goodmoive'
  import goodmoives from '../../components/home/goodmoives'

  export default{
    components:{
      routerlinkS,
      zidianying,
      gengduo,
      xingxing,
      goodmoive,
      goodmoives
    },
    data(){
      return{
        obj:[],
        arr:[]
      }
    },

    created(){
      this.axios({
        url:"/moive",
        method:"get"
      }).then((data)=>{
        console.log(data.data.movie)
        this.obj=data.data.movie
      });

      this.axios({
        url:"/goodmoive",
        method:"get"
      }).then((data)=>{
        console.log(data.data.faxianhaodianying)
        this.arr=data.data.faxianhaodianying
      })
    }

  }
</script>

<style scoped="">
 .bigbox{
   background-color: #f9f9f9;
  }
.box{
  height: 3rem;
  widows: 100%;
  }
.box .topwenzi{
  float: left;
  width: 3rem;
  height: 3rem;
  color: #42B983;
  font-size: 1.5rem;
  text-decoration: none;
}
.box1{
  width: 100%;
  height: 11rem;
  display:flex;
  overflow: auto;
}
.box1 .gd{
  width: 100%;
  height: 2rem;
  line-height:2rem;
}
.zidian{
  /* height: 5rem; */
  margin-right: 1rem;
/* flex-shrink: 0; */
}
.neikuang{
  width: 100%;
  height: 7rem;
  background-color: #CCCCCC;
}
.dianneirong{
  border: .12rem solid sandybrown;
  width: 22rem;
  height: 3rem;
  border-radius: .4rem;
  line-height: 3rem;
  text-align: center;

}
</style>
