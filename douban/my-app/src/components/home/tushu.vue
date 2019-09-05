<template>
  <div>
    <huitui></huitui>
    <div  v-for="(v,i) in arr" :key="i">
      <span>{{v.titlt}}</span>
      <p>{{v.concont}}</p>
      <img :src="v.imgurl" alt="">
    </div>

  </div>
</template>

<script>
  import huitui from '../huitui'
  export default{
    components:{
      huitui
    },
    data(){
      return{
        arr:[]
      }
    },
   // created(){
   //   this.axios({
   //     url:"/a",
   //     method:"get"
   //   }).then((ok)=>{
   //     console.log(ok)
   //     this.arr = ok.data
   //     console.log(this.arr)
   //   })
   // },
   // computed:{
   //   newarr(){
   //     return{
   //
   //     }
   //   }
   // }
  }
</script>

<style>
</style>
