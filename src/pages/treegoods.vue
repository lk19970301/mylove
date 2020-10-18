<template>
  <div>
    <div class="header">
      <p><go-back></go-back></p>
      <p>商品详情</p>
    </div>
    <div class="tree-list">
      <div v-for="item in treegoods" :key="item.id" class="item"
      is="router-link"
      :to="'/treeDetail?id=' + item.id"
      >
        <img :src="'http://localhost:3000' + item.img" alt="" />

        <div>
          <p>{{ item.goodsname }}</p>
          <p>{{ item.price }}</p>
          <p>立即抢购</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqTreegoods } from "../utils/request";
export default {
  data() {
    return {
      treegoods: [],
    };
  },
  mounted() {
    var id = this.$route.query.id;
    reqTreegoods(id).then((res) => {
      console.log("--------我是reqTreegoods--------");
      this.treegoods = res.data.list;
      console.log(this.treegoods);
    });
  },
};
</script>

<style scoped>
.item {
  display: block;
  padding: 0.2rem;
  width: 100%;
  height: 2rem;
  margin-bottom: 0.1rem;
}
.tree-list {
  margin-top: 0.8rem;
}
.item img {
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
  float: left;
}
.item > div {
  float: left;
  margin-left: 0.3rem;
}
.item div p:nth-child(1) {
  font-size: 0.38rem;
  color: #333;
  line-height: 0.6rem;
  margin-bottom: 0.2rem;
}
.item div p:nth-child(2) {
  color: #e23838;
  font-size: 0.4rem;
}
.item div p:nth-child(3) {
    padding: .2rem .4rem;
    background: #f90;
    color: #fff;
    display: inline-block;
    border-radius: .2rem;
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