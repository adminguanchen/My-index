<template>
  <div>
  <img src="../../../static/img/1.gif" v-if="obj.length<=0" id="bigimg"/>
 <div v-else>
      <router-link :to="{name:'xiangqing',params:{id:v.id}}" v-for="(v,i) in obj" :key="i" class="divbox">
        <left-box :biaoti="v.title" :neirong="v.content" :imgurl="v.image"></left-box>
        <!-- <p>{{v.title}}</p> -->
      </router-link>
  </div>
</div>
</template>

<script>
  import leftBox from './leftBox'
  export default{
    components:{
      leftBox
    },
    data(){
      return{
        obj:[],
      }

    },
    created() {
      this.axios({
          url:"/shouye",
          method:"get",
      }).then((data)=>{
          this.obj = data.data.shouye
          // console.log(this.obj)
      })
    },
  }
</script>

<style scoped="">
  #bigimg{
    width: 10rem;
    height: 10rem;
    margin: 50% 50%;
  }
</style>
