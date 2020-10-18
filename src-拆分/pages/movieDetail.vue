<template>
  <div>
      <h2>电影详情</h2>
      <p>{{detail.name}}</p>
      <img :src="detail.img" alt="">
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  computed:{
    ...mapGetters({
      detail:"movie/detail"
    })
  },
  methods:{
    ...mapActions({
      requestDetail:"movie/requestDetail"
    })
  },
  mounted(){
    var id=this.$route.query.id
    this.requestDetail(id)
  }
}
</script>

<style>

</style>