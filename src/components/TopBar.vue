<template>
  <div class="topbar">
    <div class="warp topbar-wrap">
      <div class="l">欢迎来到叩丁狼积分商城</div>
      <div class="r">
        <ul>
          <li @click="xianshiwenben">
            <img class="avatar" width="26px" :src="Userinfo.headImg" alt="">
            用户名：{{ Userinfo.nickName }}
          </li>
          <li @click="xianshiwenben">我的积分：{{ Userinfo.coin }}</li>
          <li @click="xianshiwenben">获取积分</li>
          <li>叩丁狼官网</li>
          <li class="cart_btn" v-show="isLogined">
            <img src="../assets/img/cart.png" alt="" width="20" />
            <span  @click="$router.push('/GeRenzhongxin/Cart')"> 购物⻋ </span>
            <b>{{cartTotal}}</b>
          </li>
          <li class="log-btn" v-show="!isLogined" @click="tologin">登录</li>

        </ul>
      </div>
    </div>
  </div>

</template>

<script>

import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      // cartTotal: '0'

    }
  },
  methods: {
    ...mapMutations({
      changeisshowPromt: 'isshowPromt/changeisshowPromt',
      changeisshow: 'Showlogin/changeisshow',
      changeisLogined: 'loginstatus/changeisLogined',
      inituserqingkong: 'Userinfo/inituserqingkong'
    }),
    ...mapActions({
      asyncchangeisshowPromt: 'isshowPromt/asyncchangeisshowPromt',
      asyncchangeUserinfo: 'Userinfo/asyncchangeUserinfo'

    }),
    tologin () {
      this.changeisshow()
    },
    xianshiwenben () {
      this.asyncchangeisshowPromt({
        msg: '请登录账号',
        type: 'success'
      })
    }
  },
  computed: {
    ...mapState({
      isLogined: state => state.loginstatus.isLogined,
      cartTotal: state => state.Userinfo.cartTotal,
      Userinfo: state => state.Userinfo.userInfo

    })
  },
  // watch: {
  //   // 组件重载
  //   // 判断路由
  //   '$route.path': {
  //     handler (newVal, oldVal) {
  //       const mytoken = localStorage.getItem('x-auth-token')
  //       // 是否有token？没有就为true，有就false
  //       this.changeisLogined(Boolean(mytoken))
  //     }
  //   }
  // }
  created () {
    const mytoken = localStorage.getItem('x-auth-token')
    //       // 是否有token？没有就为true，有就false
    this.changeisLogined(Boolean(mytoken))
    if (mytoken) {
      this.asyncchangeUserinfo()
    } else {
      this.inituserqingkong()
    }
  }

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
  .cart_btn { width: 124px;
   height: 40px;
    background: #0a328e;
     color: #fff;
      display: flex;
       justify-content: center;
        align-items: center;
         cursor: pointer;
          span { margin-left: 8px; margin-right: 6px; }
           b{ width: 22px; height: 22px;
            line-height: 22px;
             border-radius: 50%;
              background-color: #f40;
               text-align: center; } }
</style>
