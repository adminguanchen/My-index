<template>
<div>
  <img src="../../../static/img/1.gif" v-if="obj2.length<=0" id="bigimg"/>
  <!-- 顶部导航 -->
    <div v-else>
      <div class="box">
        <router-link to="/home" class="topwenzi">豆瓣</router-link>
      <routerlink-s></routerlink-s>
      </div>


      <!-- banner -->
      <br>
      <div class="bigbox">
        <gengduo class="gd"></gengduo>
        <div class="box1">
            <zidianying  v-for="(v,i) in obj2" :key="i" :imgurl="v.imgurl" :biaoti="v.title" class="zidian"></zidianying>
        </div>

      </div>
      <br>
      <div class="bigbox">
        <gengduo class="gd"></gengduo>
        <div class="box1">
           <zidianying  v-for="(v,i) in obj1" :key="i" :imgurl="v.imgurl" :biaoti="v.title" class="zidian"></zidianying>
        </div>

      </div>
      <br>
      <div class="bigbox">
        <gengduo class="gd"></gengduo>
        <div class="box1">
          <zidianying  v-for="(v,i) in obj" :key="i" :imgurl="v.imgurl" :biaoti="v.title" class="zidian"></zidianying>
        </div>

      </div>
      <!-- 轮播 -->
      <div class="lunbox">
        <goodmoive></goodmoive>
        <div class="neikuang">
          <goodmoives v-for="(v,i) in arr" :key="i" :neirong="v.title" :color="v.color" class="dianneirong" :links="v.line"></goodmoives>
        </div>
      </div>
      <!-- 分类 -->
      <div class="classbox">
        <div v-for="(v,i) in lei" :key="i" class="leiclass">
          <moiveclass :title="v.title" :tcolor="v.tcolor" :fuhao="v.fuhao" :fcolor="v.fcolor"></moiveclass>
      </div>
      </div>
      <!-- 下载 图-->
      <div class="downapp">
          <div class="footer">
            <img src="../../../static/img/6.png"/>
            <div class="ftfont">
                <span>豆瓣</span>
                <p>我的精神部落</p>
            </div>
          </div>
      </div>
      <!-- 下载app -->
      <div  class="da">
        <router-link to="/downapps" class="boxss">去 App Store 免费下载 IOS 客户端</router-link>
      </div>
  </div>
</div>
</template>
<script>
  import routerlinkS from '../../components/home/routerlinkS'
  import zidianying from '../../components/home/zidianying'
  import gengduo from '../../components/home/gengduo'
  import goodmoive from '../../components/home/goodmoive'
  import goodmoives from '../../components/home/goodmoives'
  import moiveclass from '../../components/home/moiveclass'
  import downapps from '../downapps'

  export default{
    components:{
      routerlinkS,
      zidianying,
      gengduo,
      goodmoive,
      goodmoives,
      moiveclass,
      downapps
    },
    data(){
      return{
        obj:[],
        obj1:[],
        obj2:[],
        arr:[],
        lei:[],
        value: 3.7
      }
    },
    created(){
      this.axios({
        url:"/moive1",
        method:"get"
      }).then((data)=>{
        // console.log(data.data.movie)
        console.log(data.data.moive)
        this.obj=data.data.moive
      });
      this.axios({
        url:"/moive2",
        method:"get"
      }).then((data)=>{
        // console.log(data.data.movie)
        console.log(data.data.moive)
        this.obj1=data.data.moive
      });
      this.axios({
        url:"/moive3",
        method:"get"
      }).then((data)=>{
        // console.log(data.data.movie)
        console.log(data.data.moive)
        this.obj2=data.data.moive
      });

      this.axios({
        url:"/goodmoive",
        method:"get"
      }).then((data)=>{
        // console.log(data.data.faxianhaodianying)
        this.arr=data.data.faxianhaodianying
      });
      this.axios({
        url:"/moiveclass",
        method:"get"
      }).then((data)=>{
        // console.log(data.data.moive)
        this.lei=data.data.moive
      })
    }

  }
</script>

<style scoped="">
  #bigimg{
    width: 10rem;
    height: 10rem;
    margin: 50% 30%;
  }
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
  height: 18rem;
  display:flex;
  overflow: auto;
  text-decoration: none;
}
.box1 .gd{
  width: 100%;
  height: 2rem;
  line-height:2rem;
  margin-top: 1rem;
}
.zidian{
  /* height: 5rem; */
  margin-right: .16rem;
  flex-shrink: 0;
  text-decoration: none;
}
.neikuang{
  white-space: nowrap;
  overflow: auto;
  width: 100%;
  margin-top: 1rem;
}
.dianneirong{
  margin-right: 1rem;
  border: .12rem solid sandybrown;
  padding:0.8rem;
  border-radius: .4rem;
  text-align: center;
  display: inline-block;
}
.lunbox{
  margin-top: 1rem;
}
.classbox{
  width: 100%;
  float: left;
  margin-top: 1rem;
}
.leiclass{
  width: 50%;
  float: left;
}
.downapp{
  float:left;
  height: 8.4rem;
  width: 100%;
  margin-top: 2rem;
}
.footer{
  float: left;
  margin-left:4rem ;
}
.footer img{
  float:left;

}
.ftfont{
  float: left;
  margin-left:1rem ;
}
.ftfont span{
  font-size: 3.5rem;
}
.ftfont p{
  font-size: 1.1rem;
}
.da{
  float: left;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
}
.boxss{
      text-decoration: none;
      color: #2E8B57;
  }
  .xingbox{
    width: 1rem;
  }

</style>
