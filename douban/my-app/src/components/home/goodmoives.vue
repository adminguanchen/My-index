<template>
  <div :class="links?'qq':''">
    <router-link to="/yingyuan" :style="{color:color}" class="ha">{{neirong}}</router-link>
  </div>
</template>

<script>
  export default{
    props:["neirong","color","links"]
  }
</script>

<style scoped="">
.ha{
  text-decoration: none;
}
.qq{
  display: block;
}
</style>
