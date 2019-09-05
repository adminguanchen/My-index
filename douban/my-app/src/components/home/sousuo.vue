<template>
  <div class="box">
    <div class="box1">
      <huitui class="callback"></huitui>
      <input type="text" class="int" placeholder="放大镜">
    </div>
    <div v-for="(v,i) in arr" :key="i" class="list">
      <!-- <p :style="'color:' + v.color">asdasdasd</p> -->
      <zluyou :biaoti="v.title" :color="v.color"  :jianjie="v.concont" :scolor="v.scolor" class="lists"></zluyou>
    </div>
    <div>
      <lyfooter></lyfooter>
    </div>
  </div>
</template>


<script>
  import huitui from '../huitui'
  import zluyou from './zluyou'
  import lyfooter from './lyfooter'
  export default{
    components:{
      huitui,
      zluyou,
      lyfooter
    },
    data(){
      return{
        arr:[]
      }
    },
    created() {
      this.axios({
        url:'/luyou',
        method:"get"
      }).then((data)=>{
          this.arr = data.data
          console.log(this.arr)
      })
    }
  }
</script>

<style scoped="">
  .box{
    width: 100%;
  }
  .box1{
    display: flex;
    height: 2rem;
    border-bottom: .05rem solid #f3f3f3;
  }

  .callback{
    float: left;
    flex-basis: 20%;
    height: 1rem;
  }
  .int{
    order: none;
    border: none;
    text-align: center;
    height: 1.2rem;
    background-color: #f3f3f3;
    float: left;
    flex-basis: 80%;
  }
  .list{
    margin-left: .5rem;
  }
  .lists{
    margin: .2rem 1.5rem;
    text-align: center;
    float: left;
    width: 5rem;
    height: 5rem;
  }
</style>
