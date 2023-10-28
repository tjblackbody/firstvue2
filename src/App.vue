<template>
  <div id="app">
 <!-- 顶部直通 -->
    <TopBar></TopBar>
    <HeaDer></HeaDer>
    <router-view/>
    <FooTar></FooTar>

  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import FooTar from '@/components/FooTar.vue'
import HeaDer from '@/components/HeaDer.vue'

export default {
  components: {
    TopBar, FooTar, HeaDer
  }

}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
