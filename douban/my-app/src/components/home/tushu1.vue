<template>
  <div class="tushubox">
    <span>{{title1}}</span>
    <router-link to="/tushu" class="tushulink">{{title2}}</router-link>
  </div>
</template>

<script>
  export default{ 
    props:["title1","title2","color"]
  }
</script>

<style scoped>
  .tushubox{
    padding: 1rem;
  }
  .tushulink{
    float: right;
    text-decoration: none;
    color: #2E8B57;
  }
</style>
