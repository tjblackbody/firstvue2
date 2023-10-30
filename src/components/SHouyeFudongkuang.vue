<template>
  <div>
    <div class="big warp">
      <div class="big1">
         <ul class="jingpingtuijian1">
          <li><img width="285px" height="250px" src="../assets/img/listimg.jpg" alt=""></li>
          <li>叩丁狼精品T恤</li>
          <li>200积分</li>
          <li><div class="lijiduihuan">
            立即兑换
          </div></li>
         </ul>
      </div>
      <div class="big1">
        <ul class="jingpingtuijian1">
          <li><img width="285px" height="250px" src="../assets/img/listimg.jpg" alt=""></li>
          <li>叩丁狼定制鸭舌帽</li>
          <li>200积分</li>
          <li><div class="lijiduihuan">
            <p>立即兑换</p>
          </div></li>
         </ul>

      </div>
      <div class="big1">
        <ul class="jingpingtuijian1">
          <li><img width="285px" height="250px" src="../assets/img/listimg.jpg" alt=""></li>
          <li>叩丁狼定制个性帆布袋</li>
          <li>200积分</li>
          <li><div class="lijiduihuan">
            立即兑换
          </div></li>
         </ul>

      </div>
      <div class="big1">
        <ul class="jingpingtuijian1">
          <li><img width="285px" height="250px" src="../assets/img/listimg.jpg" alt=""></li>
          <li>叩丁狼定制卫衣</li>
          <li>200积分</li>
          <li><div class="lijiduihuan">
            立即兑换
          </div></li>
         </ul>

      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.big{
  height: 412px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  .big1{
    border: red 1px;
    height: 412px;
    width: 285px;
    border:  solid 1px red;
    :hover{
      transform: translate(45px);
      transition-delay: 300ms;
}
    .jingpingtuijian1{
      display: flex;
      flex-direction: column;
      align-items: center;

   li:nth-child(2){
   display: flex;
   justify-content: center;
    margin-top: 22px;
    width: 200px;
height: 18px;
font-size: 18px;
font-family: SourceHanSansSC;
font-weight: 300;
color: #333333;
line-height: 23px;

   }
   li:nth-child(3){
    margin-top: 16px;
    width: 70px;
height: 18px;
font-size: 18px;
font-family: SourceHanSansSC;
font-weight: bold;
color: #FD604D;
   }
   li:nth-child(4){
    margin-top: 20px;
   :hover{
    background-color: #0A328E;
    color: white;
   }
    .lijiduihuan{
      width: 100px;
height: 36px;
border:solid black 1px;
display: flex;
align-items: center;

p{
  width: 73px;
height: 18px;
font-size: 18px;
font-family: SourceHanSansSC;
font-weight: 300;
color: #0A328E;
line-height: 30px;
// text-align: center;

}

    }

   }
    }

  }}
</style>
