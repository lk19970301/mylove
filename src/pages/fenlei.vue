<template>
<div>
   <div class="header">
       分类

   </div>
   <div class="main"> 
       <div class="left">
           <div v-for="(item,index) in tree" :key="item.id" @click="n=index"
            :class="[n==index?'select':'']">
            {{item.catename}}
           </div>
 


       </div>

        <div class="right" v-if="tree.length>0">
            <div v-for="(item,index) in tree[n].children" :key="index" class="liao" 
            is="router-link"
           :to="'/treegoods?id=' + item.id">
              <img :src="'http://localhost:3000' + item.img" alt="" />
              <p>{{item.catename}}</p>
        </div> 
        </div>
         
        
   </div>



    
</div>
  
</template>

<script>
import {reqGetcatetree} from "../utils/request"
export default {
    data(){
        return{
        n:0,
         
        tree:[]

        }
    },
    mounted(){
       reqGetcatetree().then(res=>{
       console.log("------我还是reqGetcatetree--------");
       this.tree=res.data.list
       console.log(this.tree[0]);
       
       }) 
    }

} 
</script>

<style scoped>
.main{
    display: flex;
}
.header{
    width: 100%;
    height: .8rem;
    background: orange;
    text-align: center;
    line-height: .8rem;
    color: white;
}
.select{
    border-left: .1rem solid #1d84a7;
    /* background: #fff; */
    color: #f90;
}
.left{
    width: 2.34rem;
    background: #fafafa;
    float: left;
}
.left div{
    font-size: .28rem;
    height: .93rem;
    text-align: center;
    line-height: .93rem;
}
.right{
    flex: 1;
}
.right .liao{
    float: left;
    width: 2.2rem;
    height: 2.8rem;
    margin: 0.1rem;
    text-align: center;
}
.right img{
    width: 2.2rem;
    height: 2.3rem;
}

</style>