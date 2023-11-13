<template>
    <div>
        <div class="login-heimu">
            <div class="mask" @click="close">

            </div>
            <div class="logkuang">
            <img   @click="cha" class="close" src="../assets/img/close.png" alt="">
           <ul class="denglufangshi">
            <li :class="isshowform ? 'active':''" @click="isshowform=true">手机号码登录</li>
            <li style="margin-left: 30px; margin-right: 30px; " >‖</li>
            <li :class="!isshowform ? 'active':''" @click="toshowweixin">微信扫码登陆</li>
           </ul>
           <div class="bbody">
            <div class="biaodan" v-show="isshowform">
                <div class="input-group ">
                    <input ref="phone" type="text" name="" id="#shoujihao" placeholder="请输入手机号" v-model="phonenum">
                </div>

                <div class="input-group mb20">
                <slide-verify :l="42" :r="20" :w="362" :h="140" @success="onSuccess" @fail="onFail" @refresh="onRefresh" :style="{ width: ' 100%' }" class="slide-box" ref="slideBlock" :slider-text="msg"></slide-verify>
                </div>
                <div class="input-group code mb20">
                    <input type="text" name="" id="" placeholder="请输入短信验证码" v-model="yanzhengma" >

                    <div class="btn"  :class="isshowyanzheng?'has-count':''"  >
                    <span v-show="!isshowyanzheng" @click="getsimcode" >获取验证码</span>
                    <span v-show="isshowyanzheng" >{{ count }}s</span>
                    </div>

                </div>
                <div class="btn" @click="loginyanzheng">登录</div>
            </div>
            <div class="wx-saoma" id="weixin" v-show="!isshowform">
            </div>
           </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { sendAPI, PCloginAPI } from '@/request/Api'
export default {
  name: 'JifenshopLogin',

  data () {
    return {
      // 登录显示隐藏
      isshowform: true,
      // 验证码图片
      msg: '向右滑动',
      // 手机号
      phonenum: '18290299724',
      // 倒计时数字
      isshowyanzheng: false,
      count: 30,
      yanzhengma: '666'

    }
  },

  mounted () {

  },

  methods: {
    ...mapMutations({
      changeisshow: 'Showlogin/changeisshow',
      changeisLogined: 'loginstatus/changeisLogined',
      changeisshowPromt: 'isshowPromt/isshowPromt'

    }),
    ...mapActions({
      asyncchangeUserinfo: 'Userinfo/asyncchangeUserinfo'
    }),
    daojishi () {
      const timer = setInterval(() => {
        this.count--
        if (this.count === 0) {
          clearInterval(timer)
          this.isshowyanzheng = false
          this.count = 30
        }
      }, 1000)
    },
    // 拼图成功
    onSuccess (times) { const ms = (times / 1000).toFixed(1); this.msg = ' login success, 耗时 ' + ms + ' s' },
    // 拼图失败
    onFail () {
      this.onRefresh()
      // 重新刷新拼图
    },
    // 拼图刷新
    onRefresh () { this.msg = ' 再试⼀次 ' },
    // 关闭登录显示
    close () {
      this.changeisshow()
    },
    cha () {
      this.changeisshow()
    },
    zhuce () {

    },
    async loginyanzheng () {
      // if (this.msg === ' 再试⼀次 ' || this.msg === '向右滑动') {
      //   alert('请重新滑动')
      //   return
      // }
      // alert('验证通过')

      if (!this.yanzhengshoujihuadongfzFn()) {
        return
      }
      // 验证码验证
      if (this.yanzhengma === '') {
        alert('验证码错误')
        return
      }
      // 发送登录请求
      const res = await PCloginAPI({
        verifyCode: this.yanzhengma,
        phone: this.phonenum

      })
      console.log(res)
      alert('成功登录')
      // 使登录框消失
      this.changeisshow()
      // 保存token到本地存储
      localStorage.setItem('x-auth-token', res['x-auth-token'])

      // 使登录按钮状态值改变变成购物车
      this.changeisLogined(true)
      // window.location.reload()
      // this.denglutishi()
      this.changeisshowPromt()
      // 获取用户信息
      this.asyncchangeUserinfo()
    },
    // 验证手机验证图片封装
    yanzhengshoujihuadongfzFn () {
      // 验证手机
      const ref = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
      if (!ref.test(this.phonenum)) {
        alert('请输入正确手机号')
        this.$refs.phone.focus()
        return false
      }
      //   // 2.验证图片
      if (this.msg === ' 再试⼀次 ' || this.msg === '向右滑动') {
        alert('请正确滑动')
        return false
      }
      return true
    },
    // 验证手机号和滑动图片
    async getsimcode () {
    //   // 1.验证手机号是否符合规范.
      if (!this.yanzhengshoujihuadongfzFn()) {
        return
      }
      // 3.发送请求
      let res = ''
      res = await sendAPI({
        phone: this.phonenum.trim()
      })
      if (res.code === 0) {
        alert('验证码已发送')
        //   alert('验证通过')显示倒计时
        this.isshowyanzheng = true
        this.daojishi()
      }
    },
    toshowweixin () {
      this.isShowForm = false // 申请微信登录⼆维码
      // const _this = this
      // /* eslint-disable no-new */
      // new WxLogin({
      //   id: 'weixin',
      //   appid: 'wx67cfaf9e3ad31a0d',
      //   // 这个 appid 要填死
      //   scope: 'snsapi_login',
      //   // 扫码成功后重定向的接⼝
      //   redirect_uri: 'https://sc.wolfcode.cn/cms/wechatUsers/shop/PC',
      //   // state 填写编码后的 url
      //   state: encodeURIComponent(window.btoa('http://127.0.0.1:8080' + _this.$route.path)),
      //   // 调⽤样式⽂件
      //   href: ''
      // })
    }
  }

// denglutishi () {
//   this.changeisshowPromt()
//   setTimeout(() => {
//     this.changeisshowPromt()
//   }, 2000)
// }
}
</script>

<style lang="less" scoped>
@import url("../assets/yangshi/quanjude.less");
.login-heimu{
    width: 100%;
    height: 100%;

    position: fixed;
    left:0;
    top:0;
    .mask{
        width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0,0.5);
    }

}
.logkuang{
    width: 555px;
    height: 423px;
    background-image: url("../assets/img/login-box-bg.png");

    position: absolute;
    left:0;
    top:0;
    right: 0;
    bottom: 0;
    margin: auto;
    .close{
        position: absolute;
        right: 60px;
        top: 10px;
        cursor: pointer;
    }
    .denglufangshi{
display: flex;
justify-content: center;
padding: 40px 0 30px;
color: #ccc;
font-size: 18px;

li{
    cursor: pointer;
}
.active{
    color: #333;
}

    }
    .bbody{
        width: 360px;
        height: 200px;

        margin: 0 auto;
    }
}
.biaodan{
    .btn{
        height: 50px;
        line-height: 50px;
        background-color: @base-color;
        color: white;
        text-align: center;
        cursor: pointer;
    }
    .has-count{
        background-color: #ccc;
    }
    .input-group{
        display: flex;
        margin-bottom: 20px;
        input{
            height: 50px;
            width: 100%;
            text-indent: 10px;
            border-color: #ccc;
        }
    }
    .code input{
        width: 260px;
        margin-right: 8px;
    }
    .code .btn{
        flex: 1;
    }
}

/deep/.slide-box { width: 100%; position: relative; box-sizing: border-box;
    canvas { position: absolute; left: 0;top: -120px; display: none; width: 100%; box-sizing: border-box; }
.slide-verify-block{ width: 85px; height: 136px; }
.slide-verify-refresh-icon { top: -120px; display: none; } &:hover { canvas { display: block; }
.slide-verify-refresh-icon { display: block; } } }
.wx-saoma{
  width: 100%;
  height: 100%;
}

</style>
