<template>
  <div class="boss">
    <p class="one">
      登录
      <router-link to="/register">注册</router-link>
    </p>
    <div class="box">
      <p>账号： <input type="text" v-model="user.phone" /></p>
      <br />

      <p>密码： <input type="text" v-model="user.password" /></p>
    </div>
    <p class="three">忘记密码</p>
    <p class="two" @click="login">登录</p>
    <p class="info">{{ msg.info }}</p>
  </div>
</template>

<script>
import { reqLogin } from "../utils/request";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      // "foodDetail":"foodDetail"
    }),
  },

  mounted() {
          
  },
  data() {
    return {
      user: {
        phone: "admin",
        password: "123",
      },
      msg: {
        info: "",
      },
      uid: "",
    };
  },
  methods: {
    ...mapActions({
      "reqAdd": "reqAdd",
    }),
    login() {
      reqLogin(this.user.phone, this.user.password).then((res) => {
        console.log("-----我是login--------");
        if (res.data.code == 500) {
          this.msg.info = res.data.msg;
          return;
        }
        if (res.data.code == 200) {
          console.log("---------uid---------");
          console.log(res);
          this.uid = res.data.list.uid;
          console.log(this.uid);
          localStorage.setItem("uid",this.uid)
           
         
        //   this.reqAdd(this.uid);

          this.msg.info = res.data.msg;
          this.$router.push("/index");
        }
      });
    },
  },
};
</script>

<style scoped>
.one {
  height: 0.8rem;
  background: orange;
  text-align: center;
  line-height: 0.8rem;
  margin-bottom: 2rem;
}
.two {
  width: 80%;
  height: 0.8rem;
  margin: 0 auto;
  background: orange;
  border-radius: 0.4rem;
  text-align: center;
  line-height: 0.8rem;
}
.box {
  margin-bottom: 0.8rem;
  padding-left: 0.4rem;
}
.three {
  padding-left: 6rem;
}
.boss {
  font-size: 0.3rem;
}
a {
  float: right;
  display: block;
}
.info {
  margin-top: 1rem;
  text-align: center;
}
</style>