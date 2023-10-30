<template>
  <div>
  <!-- <div class="header warp">
    <h1>
      <img src="../assets/img/indexLogo.6f8ac4f0.png" alt="">
    </h1>
    <div class="nav">

    <ul>
      <li>首页</li>
      <li>全部商品</li>
      <li>个人中心</li>
      <li>我的订单</li>
      <li>专属福利</li>
    </ul>
    </div>
    <div class="search">
      <input type="text">
      <span><img width="15px"  height="15px
        " src="../assets//img//search.png" alt=""></span>
    </div>
  </div> -->
  <div class="shouyejitui warp">
 <img width="100%" height="100%" src="../assets/img/banner.f559b49d.png" alt="">
  </div>
  <div class="shouyetwo">
      <SHouyereMenduihuan></SHouyereMenduihuan>
      <SHouyeFudongkuang></SHouyeFudongkuang>
      <ReMenduihuan></ReMenduihuan>
      <div class="guangaotiao warp">
        <img src="../assets/img//banner.4c6b6225.png" alt="">
      </div>
      <SHouyeFudongkuang></SHouyeFudongkuang>
      <SHouyeFudongkuang></SHouyeFudongkuang>

    </div>
    <JiFengonglue></JiFengonglue>
    <div class="jifenfenggonglue-ul warp">
      <div class="gonglue-div"></div>
      <div class="gonglue-div"></div>
      <div class="gonglue-div"></div>
      <div class="gonglue-div"></div>

    </div>

  </div>

</template>

<script>
import SHouyereMenduihuan from '../components/SHouyeremenduihuan.vue'
import SHouyeFudongkuang from '../components/SHouyeFudongkuang.vue'
import ReMenduihuan from '../components/ReMenduihuan.vue'
import JiFengonglue from '../components/JiFengonglue.vue'
export default {
  components: {
    SHouyereMenduihuan, SHouyeFudongkuang, ReMenduihuan, JiFengonglue
  }

}
</script>

<style  lang="less" scoped>
.header{
  height: 118px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav ul{
  display: flex;
  width: 500px;
  justify-content: space-between;

}
.nav ul li{
  cursor: pointer;
}

.search input{
  width: 214px;
height: 38px;
border: 1px solid #DEDEDE;
border-radius: 20px 0px 0px 20px;
text-indent: 14px;

}

.search{
  display: flex;
}
.search span{
  width: 50px;
height: 40px;
background: #0A328E;
border-radius: 0px 20px 20px 0px;
display: flex;
align-items: center;
  justify-content: center;
  cursor: pointer;

}
.shouyejitui{

  height: 507px;
  background-color: black;

}
.shouyetwo{
  margin-top: 35px;
  padding-top: 55px;
  background-color: #F5F5F5;
  width: 100%;
  height: 1736px;

}
.guanggaotiao{
  margin-top: 24px;
  height: 180px;
}
.jifenfenggonglue-ul{
  display: flex;
  height: 168px;
  background-color: pink;
  justify-content: space-between;
  .gonglue-div{

    width: 285px;
    height: 168px;
    background-color: black;
  }
}

</style>
