<template>
<div>
   <div class="bigbox">
    <div class="rementuijian warp">
      <div class="l">
        <ul>
        <li><img width="40px" height="36px" src="../assets/img/jingpin.png" alt=""></li>
        <li>精品推荐</li>
      </ul>
      </div>
      <div class="r">
        <ul>
        <li>更多</li>
        <li><img width="14px" height="14px"  src="../assets/img/arrow.png" alt=""></li>
      </ul>
      </div>

</div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.rementuijian{
 display: flex;

 height: 51px;

  justify-content: space-between;
  align-items: center;
  background-color: #F5F5F5;

}
.l ul{
  display: flex;

line-height: 23px;
align-items: center;
li:nth-child(2){
  width: 120px;
height: 29px;

font-size: 30px;
font-family: SourceHanSansSC;
font-weight: bold;
color: #242B39;
line-height: 23px;

}
  li{
    margin-left: 10px;
  }
}

.r ul{
display: flex;

// li:nth-child(1){
//   display: flex;
//     // align-items: center;
//   width: 33px;
// height: 15px;
// font-size: 16px;
// font-family: SourceHanSansSC;
// font-weight: 300;
// color: #666666;

// margin-top: 13px;

// }
}
</style>
