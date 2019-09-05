<template>
  <div class="box">
      <input type="text" placeholder="邮箱" v-model="usermail"/>
      <input type="text" placeholder="Token" v-model="usertoken"/>
      <br>
      <br>
      <button class="but" @click="login()">登录</button>
      <div class="qita">使用其它方式登录&注册</div>
  </div>

</template>

<script>
  export default{
   data(){
        return{
          usermail:"",
          usertoken:""
        }
      },

    methods:{
      login(){
        console.log(this.usermail),
        console.log(this.usertoken)
        this.axios({
          url:"http://localhost:3000/find",
          method:"get",
          params:{
            mail:this.usermail,
            token:this.usertoken
          }
        }).then((data)=>{
          console.log(data)
          if(data.data.linkid==1){
              this.$router.push({path:'/home'})
          }else if(data.data.linkid==0){
              this.$router.push({path:'/zhuce'})
          }
        })
      }
    }

  }
</script>

<style scoped>
  .box{
    margin: 2rem 1rem;
    width: 21rem;
    height: 12rem;
  }
  .box :nth-child(1){
    margin-left: 2.3rem;
    height:2.5rem;
    width: 16rem;
    outline:none;
    background:none;
    border: none;
    border:.01rem solid #CCCCCC;
  }
  .box :nth-child(2){
    margin-left: 2.3rem;
   height:2.5rem;
   width: 16rem;
   outline:none;
   background:none;
   border: none;
   border-left:.01rem solid #CCCCCC;
   border-right:.01rem solid #CCCCCC;
   border-bottom:.01rem solid #CCCCCC;
  }
  .box .but{
    background-color: #42B983;
    border-radius: 0.3rem;
    height: 2.5rem;
    width: 17rem;
    color: white;
    margin-left: 1.8rem;
    font-size:1rem;
  }
  .box .qita{
    margin: 1rem 6rem;
    color: #CCCCCC;
    font-size: 0.2rem;
  }
</style>
