<template>
  <div>
    <router-link to="/dianying"  id="app">
      <img :src="imgurl">
      <p>{{biaoti}}</p>
    </router-link>
    <el-rate
      v-model="value"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}" id="yinyong">
    </el-rate>
  </div>

</template>

<script>
  export default {
         props:["biaoti","imgurl"],
         data() {
           return {
             value: 3.7
           }
         }

  }



</script>


<style scoped="">
 .el-rate__icon{
    font-size: 12px;
  }
img{
  width: 8rem;
  height: 12rem;
}
#app{
  margin: 0;
  text-decoration: none;
  color: black;
  text-align: center;
}
</style>
