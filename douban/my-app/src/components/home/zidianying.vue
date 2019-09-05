<template>
  <div>
    <router-link to="/dianying">
      <img src="../../../static/img/4.jpg">
      <p>{{biaoti}}</p>
    </router-link>
  </div>

</template>

<script>
  export default{

    components:{

    },
    props:["biaoti","imgurl"]
  }


</script>


<style scoped="">
img{
  width: 7rem;
  height: 9rem;
}
p{
  margin: 0;
}
</style>
