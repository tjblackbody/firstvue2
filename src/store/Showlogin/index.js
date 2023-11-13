export default {
  namespaced: true,
  state: {
    // 显示登录模块的隐藏
    issshowlogin: false
  },
  getters: {
  },
  mutations: {
    changeisshow (state) {
      state.issshowlogin = !state.issshowlogin
    }
  },
  actions: {
  },
  modules: {
  }
}
