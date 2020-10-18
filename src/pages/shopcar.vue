<template>
  <div>
    <div class="header">
      <p>购物车</p>
    </div>
    <div class="con">
      <div v-for="(item, index) in cartlist" :key="index" class="item">
        <div class="one">杭州保税区</div>
        <div class="two">
          <div class="keep">
            <div class="three" @click="jk(index)">
             <img :src="item.checked?radio_hig:radio_nor" alt="">
            </div>
            <div class="four">
              <img :src="'http://localhost:3000' + item.img" alt="" />
            </div>
            <div class="five">
              <div class="name">
                {{ item.goodsname }}
              </div>
              <div class="btns">
                <div class="btn" @click="sub(index)">-</div>
                <div class="btn">{{ item.num }}</div>
                <div class="btn" @click="add(index)">+</div>
              </div>
              <div class="total">
                总价：<span>{{ item.num * item.price }}</span>
              </div>
            </div>
            <div class="six">{{ item.price }}</div>
            <div class="seven" @click="del(index)">删除</div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="one1">
        <img src="../assets/img/radio_nor.png" alt="" />
        <div class="two1">全选</div>
      </div>
      <div class="three1">
        <img :src="jok == false ? editor_hig : editor_nor" alt="" />
        <div @click="account">编辑</div>
      </div>
      <div class="four1">
        <div>合计</div>
        <div>（不含运费）</div>
      </div>
      <div class="five1">去结算</div>
    </div>
    <div class="sure" style="display: none">
      <div class="top-1">
        <div>AER YOU SURE?</div>
      </div>
      <div class="bot-1">
        <div @click="cancel">取消</div>
        <div @click="sur">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
// ---------------------------------

import { reqCartlist, reqCartedit, reqCartdel } from "../utils/request";
import { mapGetters, mapActions } from "vuex";
// import home_hig from "../assets/img/tab_home_hig.png";
import editor_nor from "../assets/img/editor_nor.png";
import editor_hig from "../assets/img/editor_hig.png";
import radio_hig from "../assets/img/radio_hig.png";
import radio_nor from "../assets/img/radio_nor.png";

export default {
  data() {
    return {
      cartlist: [],
      sing: 1,
      jok: true,
      editor_nor: editor_nor,
      editor_hig,
      sure: false,
      indexget: null,
      radio_nor,
      radio_hig,
      m: null,
    };
  },
  computed: {
    ...mapGetters({
      uid: "uid",
    }),
  },
  methods: {
    jk(index) {
     this.cartlist[index].checked=!this.cartlist[index].checked;
     console.log(this.cartlist[index].checked);
     
     
     
    },
    cancel() {
      var sure = document.querySelector(".sure");
      sure.style.display = "none";
      var keep = document.querySelectorAll(".keep");
      for (let i = 0; i < keep.length; i++) {
        keep[i].style.marginLeft = 0 + "rem";
        this.jok = !this.jok;
      }
    },
    sur() {
      var index = this.indexget;
      var id = this.cartlist[index].id;
      reqCartdel(id).then((res) => {
        var uid = localStorage.getItem("uid");

        reqCartlist(uid).then((res) => {
          this.cartlist = res.data.list;

          var sure = document.querySelector(".sure");
          sure.style.display = "none";
        });
      });
    },

    del(index) {
      var sure = document.querySelector(".sure");
      sure.style.display = "block";
      this.indexget = index;
    },
    account() {
      var keep = document.querySelectorAll(".keep");
      if (this.jok) {
        for (let i = 0; i < keep.length; i++) {
          keep[i].style.marginLeft = -1.5 + "rem";
          this.jok = !this.jok;
        }
      } else {
        for (let i = 0; i < keep.length; i++) {
          keep[i].style.marginLeft = 0 + "rem";
          this.jok = !this.jok;
        }
      }
    },

    add(index) {
      var id = this.cartlist[index].id;
      var type = 2;
      reqCartedit(id, type).then((res) => {
        console.log("-------我是edit-中的---------");
        var uid = localStorage.getItem("uid");

        reqCartlist(uid).then((res) => {
          this.cartlist = res.data.list;
        });
      });
    },
    sub(index) {
      var id = this.cartlist[index].id;
      var type = 1;
      reqCartedit(id, type).then((res) => {
        console.log("-------我是edit-中的---------");
        var uid = localStorage.getItem("uid");
        reqCartlist(uid).then((res) => {
          console.log("---------我是shopcar--------");
          console.log(res);
          this.cartlist = res.data.list;
          console.log(this.cartlist);
        });
      });
    },
  },
  mounted() {
    var uid = localStorage.getItem("uid");

    reqCartlist(uid).then((res) => {
      console.log("---------我是shopcar--------");
      //   console.log(res);

      this.cartlist = res.data.list;
      //   console.log(this.cartlist);
      this.cartlist.forEach((item) => {
        item.checked = true;
      });
      console.log(this.cartlist);
    });
  },
};
</script>

<style scoped>
.sure {
  width: 80%;
  height: 2rem;
  background: skyblue;
  position: fixed;
  left: 0.8rem;
  top: 4rem;
  border-radius: 0.3rem;
}
.top-1 {
  text-align: center;
}
.bot-1 {
  height: 1rem;
  margin-top: 0.5rem;
  /* background: pink; */
  border-top: 1px solid #666666;
}
.bot-1 div:nth-child(1) {
  width: 50%;
  float: left;
  text-align: center;
  line-height: 1rem;
  border-right: 1px solid #999;
}
.bot-1 div:nth-child(2) {
  width: 49%;
  float: right;
  text-align: center;
  line-height: 1rem;
}
.foot {
  width: 100%;
  height: 1.12rem;
  position: fixed;
  left: 0;
  bottom: 1.04rem;
  border-top: 0.02rem solid #ccc;
  overflow: hidden;
  background: #fff;
}
.one1 {
  float: left;
  width: 0.58rem;
  margin-left: 0.38rem;
  margin-top: 0.18rem;
  margin-right: 0.68rem;
}
.one1 > img {
  width: 0.42rem;
  height: 0.42rem;
  margin-bottom: 0.1rem;
  margin-left: 0.08rem;
  float: left;
}
.one1 > div {
  float: left;
  font-size: 0.28rem;
  color: #666;
  width: 100%;
  text-align: center;
}
.three1 {
  float: left;
  width: 0.58rem;
  margin-top: 0.18rem;
}
.three1 img {
  width: 0.42rem;
  height: 0.42rem;
  margin-bottom: 0.1rem;
  margin-left: 0.08rem;
  float: left;
}
.three1 div {
  float: left;
  font-size: 0.28rem;
  color: #666;
  width: 100%;
  text-align: center;
}
.four1 {
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.29rem;
}
.four1 div:nth-child(1) {
  font-size: 0.24rem;
  color: #666;
}
.four1 div:nth-child(2) {
  color: #999;
  margin-left: 0.08rem;
}
.five1 {
  width: 2.32rem;
  float: right;
  height: 1.12rem;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1.12rem;
  font-size: 0.38rem;
}
.name {
  font-size: 0.32rem;
  overflow: hidden;
  color: #333;
  margin-bottom: 0.33rem;
}
.btns {
  overflow: hidden;
}
.btn {
  width: 0.78rem;
  height: 0.47rem;
  float: left;
  font-size: 0.24rem;
  color: #666;
  border: 0.01rem solid #ccc;
  text-align: center;
  line-height: 0.47rem;
}
.con {
  width: 100%;
  margin-bottom: 2.24rem;
  margin-top: 0.8rem;
}
.item {
  margin: 0;
  padding: 0;
  font-size: 0.2rem;
}
.one {
  overflow: hidden;
  height: 1.06rem;
  font-size: 0.28rem;
  color: #a8a8a8;
  line-height: 1.06rem;
}
.two {
  overflow: hidden;
}
.keep {
  width: 8.7rem;
  height: 2.4rem;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.three {
  float: left;
}
.three img {
  width: 0.42rem;
  height: 0.42rem;
  margin-left: 0.38rem;
  margin-top: 0.86rem;
  margin-right: 0.21rem;
}
.four {
  float: left;
}
.four img {
  width: 1.57rem;
  height: 1.57rem;
  margin-top: 0.3rem;
  margin-right: 0.21rem;
}
.five {
  float: left;
  /* background: pink; */

  width: 2.8rem;
  margin-top: 0.1rem;
  margin-right: 0.13rem;
}
.six {
  float: left;
  font-size: 0.3rem;
  color: #333;
  line-height: 1.2rem;
}
.seven {
  float: right;
  height: 2.4rem;
  width: 0.98rem;
  text-align: center;
  line-height: 2.4rem;
  color: #fff;
  background: #fa0;
}
.header {
  width: 100%;
  position: fixed;
  height: 0.8rem;
  background: orange;
  top: 0;
  left: 0;
}
.header p {
  line-height: 0.8rem;
  text-align: center;
}
</style>