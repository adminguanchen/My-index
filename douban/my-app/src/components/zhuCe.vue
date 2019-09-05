<template>
  <div class="zhuce">
    <huitui></huitui>
    <span>欢迎加入豆瓣</span>
    <input type="text" placeholder="邮箱" class="input1" v-model="usermail">
    <input type="text" placeholder="密码" class="input2" v-model="userprss">
    <input type="text" placeholder="用户名" v-model="username">
    <input type="button" value="立即注册" class="btn" @click="into()">
    <p class="p1">点击[注册]表示你已阅读并同意用户注册协议</p>
    <down-app></down-app>
  </div>

</template>

<script>
  import downApp from './downApp'
  import huitui from './huitui'
export default {
 components:{
   huitui,
   downApp
 },
 data(){
   return{
    usermail:"",
    username:"",
    userprss:""
   }
 },
  methods:{
     into(){
       console.log(this.username)
       console.log(this.usermail)
       console.log(this.userprss)
       this.axios({
         url:"http://localhost:3000/get",
         method:"get",
         params:{
           mail:this.usermail,
           prss:this.userprss,
           name:this.username
         }
       }).then((data)=>{
           console.log(data)
           if(data.data.linkid==1){
             
               this.$router.push({path:'/login'})
           }
       })
     }
  }
}
</script>

<style scoped>
  .zhuce span{
    font-size: 2rem;
    margin-left: 6.5rem;
    color: seagreen;
  }
  .zhuce input{
    width: 18rem;
    height: 2rem;
    margin: 0rem 3rem;
    outline:none;
    background:none;
    border: none;
    border: 0.01rem solid #ccc;
    padding: .8rem;
  }
  .zhuce .input1{
    margin-top: 2rem;
    border-bottom: none;
  }
  .zhuce .input2{
    border-bottom: none;
  }
  .zhuce .btn{
    margin:2rem 1.5rem;
    background-color: #2E8B57;
    height: 3rem;
    width: 100%;
    color: white;
    font-size: 1rem;
    outline:none;
  }
  .zhuce .p1{
    width: 15rem;
    margin: 0px 5rem;
    font-size: 0.18rem;
    color: #CCCCCC;
  }

</style>
