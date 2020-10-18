<template>
  <div>
    <div class="one">
      <img src="../assets/img/img/home/logo.jpg" alt="" />
      <p>寻找商品</p>
    </div>

    <div class="banner">
       
        <div class="list">
          <van-swipe :autoplay="3000" vertical style="height:4rem;">
                <van-swipe-item v-for="(item, index) in banner" :key="index" class="banner-1">
                  <img :src="'http://localhost:3000' + item.img" alt="" />
                </van-swipe-item>
         </van-swipe>

        </div>
        <!-- <li v-for="item in banner" :key="item.id" class="banner99">
          <img :src="'http://localhost:3000' + item.img" alt="" />
        </li> -->
        <!-- <li class="banner99">
            <img src="http://localhost:3000/uploads/banner/e5b58320-d20c-11ea-be39-212a38807521.jpg" alt="" />
        </li> -->
        
        
        
      
    </div>
    <div class="limit">
      <div class="xianshi">
        <img src="../assets/img/img/home/1.jpg" alt="" />
        <p>限时抢购</p>
      </div>
      <div class="xianshi">
        <img src="../assets/img/img/home/1.jpg" alt="" />
        <p>限时抢购</p>
      </div>
      <div class="xianshi">
        <img src="../assets/img/img/home/1.jpg" alt="" />
        <p>限时抢购</p>
      </div>
      <div class="xianshi">
        <img src="../assets/img/img/home/1.jpg" alt="" />
        <p>限时抢购</p>
      </div>
    </div>
    <div class="goodList">
      <ul class="goods">
        <li
          v-for="item in goods"
          :key="item.id"
          class="goodsinfo"
          is="router-link"
          :to="'/goodsDetail?id=' + item.id"
        >
          <div>
            <img :src="'http://localhost:3000' + item.img" alt="" />
          </div>
          <div class="goodspri">
            <p>{{ item.goodsname }}</p>
            <p>￥{{ item.market_price }}</p>
            <p>立即抢购</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reqSeckill, reqGoods, reqBanner } from "../utils/request";
export default {
  data() {
    return {
      goods: [],
      banner: [],
    };
  },

  mounted() {
    // this.requestBanner()
    reqBanner().then((res) => {
      console.log("----------reqbanner--------");
      this.banner=res.data.list
    });
    reqSeckill().then((res) => {
      console.log("---------我是reqseckill----------");
    });
    reqGoods().then((res) => {
      console.log("-----------我是reqgooods---------------");
      this.goods = res.data.list[0].content;
      console.log(this.goods);
    });
  },
};
</script>

<style scoped>
.banner-1 img{
  width: 100%;
  height: 4rem;
}
.goodsinfo {
  height: 3.1rem;
  margin-bottom: 0.2rem;
  display: block;
}
.goodsinfo img {
  width: 3rem;
  height: 3rem;
}
.goodsinfo > div {
  float: left;
}
.goodspri {
  padding-left: 0.2rem;
}
.goodspri p:nth-child(1) {
  font-size: 0.38rem;
  margin-bottom: 0.2rem;
}
.goodspri p:nth-child(2) {
  color: red;
  font-size: 0.4rem;
}
.goodspri p:nth-child(3) {
  width: 2rem;
  height: 0.8rem;
  background: orange;
  text-align: center;
  line-height: 0.8rem;
  color: white;
  border-radius: 0.4rem;
  margin-top: 0.4rem;
}

.limit {
  width: 100%;
  height: 2.3rem;
  /* background: pink; */
  /* background: skyblue; */
}
.limit .xianshi {
  width: 24%;
  margin-left: 0.05rem;
  height: 2rem;
  float: left;
  text-align: center;
}
.xianshi img {
  width: 100%;
}
.lov {
  width: 100%;
}
.one {
  height: 1rem;
  /* background: pink;*/
}
.one img {
  width: 2rem;
  height: 0.5rem;

  margin-top: 0.3rem;
}
.one p {
  float: right;
  width: 2rem;
  height: 0.5rem;
  background: #cccccc;
  text-align: center;
  line-height: 0.5rem;
  border-radius: 0.2rem;
  margin-top: 0.3rem;
  margin-right: 2rem;
}
 
</style>