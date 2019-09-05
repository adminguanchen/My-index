<template>
  <div>
    <!--3. 使用 -->
    <quxiao></quxiao>
    <mess-age></mess-age>
    <router-links></router-links>
  </div>
</template>

<script>
  // 1.引用
  import quxiao from '../components/quxiao'
  import messAge from '../components/messAge'
  import routerLinks from '../components/routerLinks'

  export default{
    //2.调用
    components:{
      quxiao,
      messAge,
      routerLinks
    }
  }
</script>

<style scoped>
</style>
