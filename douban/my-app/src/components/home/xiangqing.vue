<template>
  <div>

    <img src="../../../static/img/1.gif" v-if="obj.length<=0" id="bigimg"/>
    <!-- {{text[0].title}} -->

    <div class="box"  v-else>
      <!-- 顶部 -->
      <div class="titles">
        <huitui></huitui>
        <routerlink-s class="links"></routerlink-s>
      </div>
      <div class="clear"></div>
      <!-- 图片 -->
      <div class="aa">
        <router-link to="/down" id="topimg">
          <img src="../../../static/img/28.png">
        </router-link>
      </div>
       <!-- 简介 -->

       <div class="jianjie">
          <div class="jjtitle">'{{text[0].title}}'</div>
          <div class="jjimg"><img :src="text[0].image"></div>
          <div class="leixing">
            <!-- 时间 -->
             <div class="lxtime">
               <span>时间 :</span>
               <ul>
                 <li>{{text[0].begin_time}}</li>
                 <li>{{text[0].end_time}}</li>
               </ul>
             </div>
            <!-- 地点 -->
            <div class="lxplace">
              <span>地点 :</span>
              <ul>
                <li>{{text[0].address}}</li>
              </ul>
            </div>
           <!-- 费用 -->
            <!-- <div class="lxmoney">
              <span>费用 :</span>
              <ul>
                <li>{{text[0].fee_str}}</li>
              </ul>
            </div> -->
          </div>
          <div class="jjcon">
            <h3 style="color:green">活动详情</h3>
            <div v-html="text[0].content"></div>
          </div>
       </div>

    </div>
  </div>
</template>


<script>
 import huitui from '../huitui'
 import routerlinkS from '../../components/home/routerlinkS'
  export default{
    components:{
      routerlinkS,
      huitui
    },
    data(){
      return{
        obj:[],
        text:[]
      }
    },
    created() {
      console.log(this.$route.params.id)
      this.axios({
        url:'/shouye',
        method:'get'
      }).then((ok)=>{
        this.obj = ok.data.shouye;

        this.text = this.obj.filter((v,i)=>{
          if(v.id==this.$route.params.id){
            return this.obj[i]
          }
        })
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
  li{
    list-style: none;
  }
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
  .aa{
    background-color: #00FF00;


  }
 .aa a{
    width: 100%;
    height: 5rem;
    display: inline-block;
     position: relative;
  }
.aa a img{
    width: 100%;
    height: 100%;
  }
  .aa a .topfont{
    height: 100%;
    width: 7rem;
    background-color: #0000FF;
    position: absolute;
  }
  .clear{
    clear: both;
  }
.jianjie{
  width: 100%;
  height: 100%;
}
.jianjie .jjtitle{
  width: 80%;
  font-weight: bold;
  margin: 2rem 2rem;
  text-align: center;
}
.jianjie .jjimg{
  margin-bottom: 2rem;
}
.jianjie .jjimg img{
  margin-left: 22%;
}
.jianjie .jjcon{
  width: 100%;
}

.jianjie .jjcon p{
  width: 100%;
}
.jianjie .lxtime span{
  font-size: 1.2rem;
  color: #000000;
  text-align:center;
  height: 42px;
  line-height:42px ;
}
.jianjie .lxtime ul{
  margin-left: 2rem;
}
.jianjie .lxplace span{
  font-size: 1.2rem;
  color: #000000;
  text-align:center;
  height: 42px;
  line-height:42px ;
}
.jianjie .lxplace ul{
  margin-left: 2rem;
}

</style>
