<template>
  <div class="box">
    <ul class="ulbox">
      <li><router-link to="/yingyuan">影院热映</router-link></li>
      <li><router-link to="/oumei">欧美新碟榜</router-link></li>
      <li><router-link to="/zhuce">注册账号</router-link></li>
      <li><router-link to="/login">登录豆瓣</router-link></li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
  .box{
    width: 100%;
  }
  ul{
    width: 100%;
  }
  a{
    text-decoration: none;
    color: black;
  }
  li{
    list-style: none;
    margin: .3rem 0.3rem;
  }
.ulbox{
  float: left;
}
  .ulbox li{
    height: 3rem;
    width: 8rem;
    background-color: #f6f6f6;
    float: left;
    text-align: center;
    line-height: 3rem;
  }
</style>
