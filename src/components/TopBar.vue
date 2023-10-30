<template>
  <div class="topbar">
    <div class="warp topbar-wrap">
      <div class="l">欢迎来到叩丁狼积分商城</div>
      <div class="r">
        <ul>
          <li>
            <img class="avatar" width="26px" src="../assets/img/userImg.f8bbec5e.png" alt="">
            用户名：游客
          </li>
          <li>我的积分：--</li>
          <li>获取积分</li>
          <li>叩丁狼官网</li>
          <li class="log-btn">登录</li>
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
.topbar{
  height: 40px;
  background-color: black;
  color: white;
  line-height: 40px;
  .topbar-wrap{
    background-color: pink;
    height: 40px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
font-family: SourceHanSansSC;
font-weight: 300;
color: #FFFEFE;
background: #242B39;

  }
}

  .r ul{
    display: flex;

  }
  .r ul li{
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .avatar{
    border-radius: 50%;
  }
  .log-btn{
    width: 124px;
    height: 40px;
    background-color: #0A328E;
    justify-content: center;
  }
</style>
