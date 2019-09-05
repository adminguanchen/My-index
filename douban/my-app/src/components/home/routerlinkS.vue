<template>
  <div class="box">
    <ul class="ulbox">
      <li><router-link to="/dianying" class="link1 de">电影</router-link></li>
      <li><router-link to="/tushu" class="link2 de">图书</router-link></li>
      <li><router-link to="/guangbo" class="link3 de">广播</router-link></li>
      <li><router-link to="/xiaozu" class="link4 de">小组</router-link></li>
      <li><router-link to="/sousuo" class="link5 de">搜索</router-link></li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
  .box{
    width: 80%;
    height: 3rem;
    float: left;
  }
  .box .ulbox{
    float: left;
    margin:0;
    margin-left: 5rem;
  }
  li{
    float: left;
    list-style: none;

    margin: 0.7rem 0.3rem;
  }

  .box .de{
    /* flex: 1; */
    text-decoration: none;
  }
  .box .link1{
  color:darkred ;
  font-size: .9rem;
  }
  .box .link2{
  color:salmon ;
  font-size: .9rem;
  }
  .box .link3{
  color:slateblue ;
  font-size: .9rem;
  }
  .box .link4{
  color:darkorange ;
  font-size: .9rem;
  }
  .box .link5{
  color:darkred;
  font-size: .9rem;
  }</style>
