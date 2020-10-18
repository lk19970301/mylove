<template>
<div>

     <div class="head">
         <p class="header">
             个人中心
         </p>
         <p class="one"></p>
         <p class="keep1">
             <img src="../assets/img/1.jpg" alt="">
             
         </p>
         <p class="dot">小不点</p>
         <p class="keep">
              <img src="../assets/img/keep.png" alt="">
              <span>我的收藏（5）</span>
         </p>
         

     </div>
     <div class="order">
         <div class="top">
             <div class="left">
              我的订单
             </div>
             <div class="right">
              查看订单

             </div>

         </div>
         <div class="bot">
             <div class="bot-1">
                 <div class="bot-2">
                     <img src="../assets/img/icon_refund.png" alt="">
                 </div>
                 <div class="bot-3">
                       待发货
                 </div>

             </div>
             <div class="bot-1">
                 <div class="bot-2">
                     <img src="../assets/img/icon_refund.png" alt="">
                 </div>
                 <div class="bot-3">
                       待发货
                 </div>

             </div>
             <div class="bot-1">
                 <div class="bot-2">
                     <img src="../assets/img/icon_refund.png" alt="">
                 </div>
                 <div class="bot-3">
                       待发货
                 </div>

             </div>
             <div class="bot-1">
                 <div class="bot-2">
                     <img src="../assets/img/icon_refund.png" alt="">
                 </div>
                 <div class="bot-3">
                       待发货
                 </div>

             </div>
             <div class="bot-1">
                 <div class="bot-2">
                     <img src="../assets/img/icon_refund.png" alt="">
                 </div>
                 <div class="bot-3">
                       待发货
                 </div>

             </div>

         </div>
         <div class="last">
             收货地址管理


         </div>

     </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.last{
        background: #fff;
    font-size: .34rem;
    height: 1.3rem;
    line-height: 1.3rem;
    padding-left: .43rem;
    margin-top: .14rem;
    color: #666;
}
.bot{
        height: 1.88rem;
    background: #fff;
    overflow: hidden;
}
.bot-1{
        width: 20%;
    float: left;
    height: 1.88rem;
}
.bot-2{
        width: .54rem;
    height: .48rem;
    margin: .46rem auto 0;
    position: relative;
}
.bot-2 img{
        width: .54rem;
    height: .48rem;
    position: absolute;
    left: 0;
    top: 0;
}
.bot-3{
    margin-top: .23rem;
    font-size: .24rem;
    color: #666;
    text-align: center;
}
.top{
    height: 1.24rem;
    background: #fff;
    overflow: hidden;
    border-bottom: 1px solid #333;
}
.left{
        float: left;
    font-size: .34rem;
    line-height: 1.24rem;
    color: #333;
    margin-left: 45px;
}
.right{
        float: right;
    color: #b6b6b6;
    line-height: 1.24rem;
    font-size: .34rem;
}
.keep{
        margin-top: .5rem;
    overflow: hidden;
}
.keep img{
    width: .38rem;
    height: .38rem;
    margin-left: .33rem;
    float: left;
    margin-right: .25rem;

}
.dot{
    margin-top: 1.3rem;
    text-align: center;
}
.head{
    width: 100%;
    height: 5.4rem;
    
    position: relative;
    margin-bottom: 0.2rem ;
}
.head .keep1 img{
    width: 1.8rem;
    height: 1.8rem;
    border: .14rem solid #fff;
    border-radius: 50%;
    position: absolute;
    bottom: 1.26rem;
    left: 2.53rem;
   
}
.header{
    width: 100%;
    height: .8rem;
    background: orange;
    font-size: .46rem;
    text-align: center;
    line-height: .8rem;
    color: white;
    border: 1px solid #cccccc;
    
}
.one{
    width: 100%;
    height: 2rem;
    background: orange;

}

</style>