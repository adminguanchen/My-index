<template>
 <div>
      <div v-for="(v,i) in obj" :key="i" class="divbox">
        <left-box :biaoti="v.title" :neirong="v.content" :imgurl="v.image"></left-box>
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
        obj:[]
      }
    },
    created() {
      this.axios({
          url:"/shouye",
          method:"get",
      }).then((data)=>{
          this.obj = data.data.shouye
          console.log(this.obj)
      })
    },
  }
</script>

<style scoped="">

</style>
