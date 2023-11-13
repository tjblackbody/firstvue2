<template>
  <div id="app">
 <!-- 顶部直通 -->
    <!-- 利用组件重载 -->
    <TopBar :key="TopBarkeyvalue"></TopBar>
    <HeaDer></HeaDer>
    <router-view  @fn="reloadcar"/>
    <Footer></Footer>
    <!-- 登录模态窗口组件 -->
    <Login v-show="issshowlogin"></Login>
    <PromtBox v-show="isshowPromt"></PromtBox>

  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import Footer from '@/components/Footer.vue'
import HeaDer from '@/components/HeaDer.vue'
import Login from '@/components/Login.vue'
import PromtBox from '@/components/PromtBox.vue'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      TopBarkeyvalue: 1

    }
  },
  methods: {
    reloadcar () {
      this.TopBarkeyvalue++
    }
  },
  components: {
    TopBar, HeaDer, Footer, Login, PromtBox
  },
  computed: {
    ...mapState({
      issshowlogin: state => state.Showlogin.issshowlogin,
      isshowPromt: state => state.isshowPromt.isshowPromt
    })
  },
  watch: {
    '$route.path': {
      handler (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.TopBarkeyvalue++
        }
      }
    }
  }

}

</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

</style>
