<template>
  <div>
  <div class="header warp">
    <h1>
      <img src="../assets/img/indexLogo.6f8ac4f0.png" alt="">
    </h1>
    <div class="nav">

    <ul>
      <li @click="$router.push('/home').catch(err=>{})" :class="$route.path==='/home' ? 'active':''">首页</li>
      <li @click="$router.push('/Goods').catch(err=>{})" :class="$route.path==='/Goods' ? 'active':''">全部商品</li>
      <li @click="$router.push('/GeRenzhongxin').catch(err=>{})" :class="$route.path==='/GeRenzhongxin' ? 'active':''">个人中心</li>
      <li @click="$router.push('/WoDedingdan').catch(err=>{})" :class="$route.path==='/WoDedingdan' ? 'active':''">我的订单</li>
      <li @click="$router.push('/ZhuanShufuli').catch(err=>{})" :class="$route.path==='/ZhuanShufuli' ? 'active':''">专属福利</li>
    </ul>
    </div>
    <div class="search">
      <input type="text" @keyup.13="toserach" placeholder="请输入搜索商品" v-model="uusersearch">
      <span @click="toserach"><img width="15px"  height="15px
        " src="../assets//img//search.png" alt=""></span>
    </div>
  </div>

  </div>

</template>

<script>

export default {
  components: {

  },
  methods: {
    toserach () {
      // 跳转goods
      this.$router.push(`/goods?keyword=${this.uusersearch}`)

      // 清空输入内容
      this.uusersearch = ''
    },
    data () {
      return {
        uusersearch: ''
      }
    }
  }

}
</script>

<style  lang="less" >
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
// .shouyejitui{

//   height: 507px;
//   background-color: black;

// }
// .shouyetwo{
//   margin-top: 35px;
//   padding-top: 55px;
//   background-color: #F5F5F5;
//   width: 100%;
//   height: 1736px;

// }
// .guanggaotiao{
//   margin-top: 24px;
//   height: 180px;
// }
// .jifenfenggonglue-ul{
//   display: flex;
//   height: 168px;
//   background-color: pink;
//   justify-content: space-between;
//   .gonglue-div{

//     width: 285px;
//     height: 168px;
//     background-color: black;
//   }
// }
.active{
  color: #0A328E;
}

</style>
