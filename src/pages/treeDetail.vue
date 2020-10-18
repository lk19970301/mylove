 <template>
  <div class="like">
    <div class="aler" style="display:none">
      
      加入成功

    </div>
    
    <div class="header">
      <p><go-back></go-back></p>
      <p>商品详情</p>
    </div>
    <div class="lov">
      <img :src="'http://localhost:3000' + goodsdetail.img" alt="" />
    </div>
    <div class="one">
      <div class="top">
        <p>{{ goodsdetail.goodsname }}</p>
        <p>收藏</p>
      </div>
      <div class="bot">
        <div class="left">
          <p>￥{{ goodsdetail.price }}</p>
          <del>￥{{ goodsdetail.market_price }}</del>
        </div>
        <div class="right">
          <div>热卖</div>
          <div>精品</div>
        </div>
      </div>
    </div>
    <p class="two"></p>
    <div v-html="goodsdetail.description"></div>
    <div class="foot">
      <div class="foot-one" @click="appear">加入购物车</div>
    </div>
    <div class="mask" style="display:none">
      <div class="picker">
        <div class="pick-one">
          <img :src="'http://localhost:3000' + goodsdetail.img" alt="" />
          <span>{{ goodsdetail.goodsname }}</span>
        </div>
        <h3>{{ goodsdetail.specsname }}</h3>
        <div class="joke">
          <span
            v-for="(item,index) in  specsattr"
            :key="index"
            
            @click="n=index"
            :class="[n==index?'select':'']"
            >{{ item }}</span
          >
        </div>
        <div class="pick-two" @click="appear2">
          加入购物车YES
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
  //         <!-- 2.v-bind:class="[三元]" -->
  //       <div class="box" :class="[isRed?'red':'blue']"></div>

<script>

 
// console.log(span, div);
 
import { reqGoodsDetail } from "../utils/request";
export default {
  data() {
    return {
      goodsdetail: {},
      specsattr:[],
      n:0
    };
  },
  methods: {
    appear(){
      var mask = document.querySelector(".mask")
      mask.style.display="block"
    },
    appear2(){
       var mask = document.querySelector(".mask")
       mask.style.display="none"
       var aler  = document.querySelector(".aler")
       aler.style.display="block"
       setTimeout(function(){
       aler.style.display="none"
       },1500)
   }
  },
  mounted() {
    // console.log(this.$route);
    var id = this.$route.query.id;
    reqGoodsDetail(id).then((res) => {
      console.log("-----------我是reqgoodsdeail--------");
      console.log(res);
      this.goodsdetail = res.data.list[0];
      console.log(this.goodsdetail);

      //  json.parse
      console.log(JSON.parse(res.data.list[0].specsattr));
      this.specsattr=JSON.parse(res.data.list[0].specsattr);
    });
  },
};
</script>

<style scoped>
.aler{
  width: 2.4rem;
  height: .8rem;
  background:#333;
  position: fixed;
  top: 6.2rem;
  left: 2.71rem;
  color: white;
  border-radius:.3rem;
  text-align: center;
  line-height: .8rem;

}
.pick-one {
  overflow: hidden;
}
.pick-one img {
  width: 2rem;
  height: 2rem;
  float: left;
  border-radius: 0.2rem;
  margin-right: 0.3rem;
}
.pick-one span {
  float: left;
  line-height: 0.8rem;
  font-size: 0.4rem;
}
.pick-two{
    width: 2rem;
    height: 1rem;
    
     
    position: absolute;
    right: 2.5rem;
    bottom: 0;
    background: #fa0;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    font-size: .3rem;
}
 

.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
}
.picker {
  width: 100%;
  padding: 0.3rem;
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5rem;
}
.joke span {
  float: left;
  padding: 0.2rem 0.3rem;
  border: 0.02rem solid #666;
  border-radius: 0.1rem;
  margin: 0.2rem;
  font-size: 0.3rem;
}
.joke .select {
  color: #f90;
  border-color: #f90;
}
.like {
  overflow: auto;
}
.foot {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 0.02rem solid #ccc;
  background: #fff;
}
.foot-one {
  width: 2rem;
  height: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
}

.two {
  height: 0.4rem;
  background: #cccccc;
}
.one {
  border-top: 2px solid #eee;
  /* background: skyblue; */
  margin-bottom: 0.3rem;
  height: 2rem;
}
.top {
  width: 6.5rem;
  margin: 0.1rem auto 0;
  height: 0.8rem;
}
.bot {
  width: 6.5rem;
  margin: 0.1rem auto 0;
  overflow: hidden;
}
.left {
  width: 1.5rem;
  float: left;
}
.left p {
  font-size: 0.3rem;
  color: red;
  margin: 0.1rem;
}
.right {
  overflow: hidden;
  float: left;
}
.right > div {
  float: left;
  font-size: 0.2rem;
  color: #fa0;
  border: 0.01rem solid #fa0;
  padding: 0.05rem 0.1rem;
  margin-right: 0.1rem;
}
del {
  text-decoration: line-through;
}
.top p {
  float: left;
}
.top p:nth-child(1) {
  font-size: 0.4rem;
  width: 5rem;

  padding-right: 0.3rem;
  border-right: 1px solid #cccccc;
  line-height: 0.8rem;
}
.top p:nth-child(2) {
  width: 0.74rem;
  line-height: 0.3rem;
  line-height: 0.8rem;
  padding-left: 0.3rem;
  font-size: 0.12rem;
}

.lov {
  margin-top: 0.8rem;
}
.lov img {
  width: 100%;
  height: 4rem;
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
  float: left;
  line-height: 0.8rem;
  text-align: center;
}
.header p:nth-child(2) {
  margin-left: 2.6rem;
}
</style>