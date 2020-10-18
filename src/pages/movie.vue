<template>
  <div>
      <h2>电影</h2>
      <div v-for="item in movies" :key="item.id">
        <router-link :to="'/movieDetail?id='+item.id">{{item.name}}</router-link>
      </div>
  </div>
</template> 

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  computed:{
    ...mapGetters({
      movies:"movies"
    })
  },
  methods:{
    ...mapActions({
      "requestMovie":"requestMovie"
    }),
  },
  mounted(){
    this.requestMovie()
  }
}
</script>

<style>

</style>