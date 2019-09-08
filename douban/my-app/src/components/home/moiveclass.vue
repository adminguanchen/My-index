<template>
  <div class="miqiu">
    <router-link to="/yingyuan" :style="{color:tcolor}" class="r1">{{title}}</router-link>
    <router-link to="/yingyuan" :style="{color:fcolor}" class="r2">{{fuhao}}</router-link>
  </div>
</template>

<script>
  export default{
    props:["title","tcolor","fuhao","fcolor"]
  }
</script>

<style scoped="">
.miqiu{
  padding: 1rem;
  border: .01rem solid #ccc;
}
.r1{
  text-decoration: none;
}
.r2{
  text-decoration: none;
  float: right;
}
</style>
