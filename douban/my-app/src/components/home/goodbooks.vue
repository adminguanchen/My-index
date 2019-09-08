<template>
  <div :class="links?'qq':''">
    <router-link to="/yingyuan" :style="{color:color}" class="ha">{{neirong}}</router-link>
  </div>
</template>
<!--  -->
<script>
  export default{
    props:["neirong","color","links"]
  }
</script>

<style scoped="">
a{
  text-decoration: none;
}
.qq{
  display: block;
  padding: 0;
  width: 100%;
  height: 1rem;
  border: 0;

      /* margin-right: 1rem;
      border: .12rem solid sandybrown;
      padding: 0.8rem;
      border-radius: .4rem;
      text-align: center;
      display: inline-block; */
}
</style>
