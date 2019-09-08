<template>
<div>
  <img src="../../../static/img/1.gif" v-if="obj.length<=0" id="bigimg"/>
  <img src="../../../static/img/1.gif" v-if="arr.length<=0" id="bigimg"/>
  <img src="../../../static/img/1.gif" v-if="arr1.length<=0" id="bigimg"/>
  <img src="../../../static/img/1.gif" v-if="arr2.length<=0" id="bigimg"/>
  <img src="../../../static/img/1.gif" v-if="arr3.length<=0" id="bigimg"/>
  <img src="../../../static/img/1.gif" v-if="arr4.length<=0" id="bigimg"/>
  <div class="box" v-else>
    <huitui></huitui>
    <routerlink-s class="links"></routerlink-s>
    <div class="both"></div>
    <!-- 分类 -->
    <div class="box1">
      <div v-for="(v,i) in obj" :key="i">
        <tushu1 :title1="v.title1" :title2="v.title2"></tushu1>
      </div>
      <div v-for="(v,i) in arr" :key="i">
        <tushu1 :title1="v.title1" :title2="v.title2"></tushu1>
      </div>
      <div v-for="(v,i) in arr1" :key="i">
        <tushu1 :title1="v.title1" :title2="v.title2"></tushu1>
      </div>
    </div>
    <!-- 精选好书 -->
    <div class="box2">
        <img src="../../../static/img/27.jpg">
      <div class="box-2-1">
        <span>造物</span>
        <span>¥68</span>
        <p>改变世界的王五涂点,3000幅图里的发现与冒险</p>
      </div>
    </div>
    <div class="box3">
      <div v-for="(v,i) in arr2" :key="i">
        <tushu1 :title1="v.title1" :title2="v.title2"></tushu1>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="both"></div>
    <div class="box4">
      <goodbooks v-for="(v,i) in arr3" :key="i" :neirong="v.title" :color="v.color" :links="v.line" class="connent"></goodbooks>
    </div>
    <!-- 分类 -->
    <div class="classbox">
      <div v-for="(v,i) in arr4" :key="i" class="leiclass">
        <moiveclass :title="v.title" :tcolor="v.tcolor" :fuhao="v.fuhao" :fcolor="v.fcolor"></moiveclass>
      </div>
    </div>
    <!-- footer -->
    <div class="downapp">
        <div class="footer">
          <img src="../../../static/img/6.png"/>
          <div class="ftfont">
              <spans>豆瓣</spans>
              <p>我的精神部落</p>
          </div>
        </div>
    </div>
    <!-- 下载app -->
    <div class="da">
      <router-link to="/downapps" class="boxss">去 App Store 免费下载 IOS 客户端</router-link>
    </div>
  </div>
  </div>
</template>
<script>
  import huitui from '../huitui'
  import routerlinkS from '../../components/home/routerlinkS'
  import tushu1 from '../../components/home/tushu1'
  import goodbooks from './goodbooks'
  import moiveclass from './moiveclass'
  export default{
    components:{
      routerlinkS,
      huitui,
      tushu1,
      goodbooks,
      moiveclass
    },
    data(){
      return{
        obj:[],
        arr:[],
        arr1:[],
        arr2:[],
        arr3:[],
        arr4:[]
      }
    },
    created() {
      this.axios({
        method:"get",
        url:'/tushu'
      }).then((ok)=>{
        // console.log(ok.data.tushu)
        this.obj = ok.data.tushu
      });
      this.axios({
        method:"get",
        url:'/tushu'
      }).then((ok)=>{
        this.arr = ok.data.tushu1
      });
      this.axios({
        method:"get",
        url:'/tushu'
      }).then((ok)=>{
        this.arr1 = ok.data.tushu2
      });
      this.axios({
        method:"get",
        url:'/tushu'
      }).then((ok)=>{
        this.arr2 = ok.data.tushu3
      });
      this.axios({
        method:"get",
        url:'/goodbook'
      }).then((ok)=>{
        // console.log(ok)
        this.arr3 = ok.data.goodBook
      });
      this.axios({
        url:"/moiveclass",
        method:"get"
      }).then((data)=>{
        console.log(data.data.moive)
        this.arr4=data.data.moive
      })
    }
  }
</script>
<style scoped="">
  #bigimg{
    width: 10rem;
    height: 10rem;
    margin: 50% 25%;
  }
#huitui{
    float: left;
  }
.box span{
    color:#42B983;
    float: left;
    display: block;
    font-size:2rem;
    width:4rem;
    height: 3rem;
  }
.both{
    clear: both;
  }
.box1{
    width: 100%;
  }
.box2{
    margin-top: 1rem;
    width: 100%;
    float: left;
    height: 10rem;
  }
.box2 img{
    width:30%;
    float: left;
  }
.box-2-1{
    margin-left: 2%;
    width:68%;
    float: left;
}
.box-2-1 :nth-child(1){
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #000000;
}
.box-2-1 :nth-child(2){
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
  margin-left: 8rem;
}
.box-2-1 p{
  margin: 0;
  display: inline-block;
  width:16rem ;
  height: 5rem;
  font-size: .8rem;
  color: #CCCCCC;
}
.box3{
    width: 100%;
    height: 3rem;
    float: left;
}
.box4{
  white-space: nowrap;
  overflow: auto;
  width: 100%;
  margin-top: 1rem;
}
.connent{
  margin-right: 1rem;
  border: .12rem solid sandybrown;
  padding: 0.8rem;
  border-radius: .4rem;
  text-align: center;
  display: inline-block;
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
.ftfont spans{
  font-size: 3.5rem;
}
.ftfont p{
  font-size: 1.1rem;
}
.da{
  float: left;
  height: 2rem;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
}
.boxss{
      text-decoration: none;
      color: #2E8B57;
  }
</style>
