<template>
  <div> 
      <h3>外卖</h3>
       <div v-for="item in foodList" :key="item.id">
        <router-link :to="'/foodDetail?foodId='+item.foodId">{{item.name}}</router-link>
      </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
    computed:{
        ...mapGetters({
            "foodList":"food/foodList",
            
        })
    },
    methods:{
        ...mapActions({
            "requestFoodList":"food/requestFoodList"
        })
    },
    mounted(){
        this.requestFoodList()
    }
}
</script>

<style>

</style>