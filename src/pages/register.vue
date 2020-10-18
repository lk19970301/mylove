<template>
  
  <div>
      <p class="one">
          <go-back></go-back>
          <span>注册</span>
      </p>
      <div class="two">
          <p>
              手机号：
              <input type="text" v-model="user.phone">
          </p>
          <br>
          <p>
              昵称：&nbsp; 
              <input type="text" v-model="user.nickname">
          </p>
          <br>
          <p>
              密码：&nbsp; 
              <input type="text" v-model="user.password">
          </p>

      </div>
      <div class="three" @click="register">
          注册
      </div>
      <p class="info">{{msg.info}}</p>
    
  </div>
</template>

<script>
import {reqRegister} from "../utils/request"
export default {
    data(){
        return{
        user:{
         phone:"admin",
         nickname:"admin",
         password:"123"

        },
        msg:{
        info:''
        }
        }
    },
    methods:{
     register(){
         reqRegister(this.user.phone,this.user.nickname,this.user.password).then((res)=>{
         console.log("------------我是login---------");
         console.log(res.data.code);
         if(res.data.code==500){
           this.msg.info= res.data.msg;
          return
         };
         if(res.data.code==200){
             this.msg.info =res.data.msg;
              this.$router.push("/login");

         }
         })

        }
    }

}
</script>

<style scoped>
.one{
    height: 0.8rem;
    background: orange;
    text-align: center;
    line-height: 0.8rem;
}
.one span:nth-child(1){
    float: left;
    
}
.two{
    margin-top: 2rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
}
.three{
    width: 80%;
    height: .8rem;
    border-radius: 0.4rem;
    background: orange;
    margin: 0 auto;
    text-align: center;
    line-height: .8rem;
}
.info{
    margin-top: 1rem;
    text-align: center;
}

 

</style>