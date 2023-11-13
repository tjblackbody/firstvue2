export default {
  namespaced: true,
  state: {
    // 用户登录在本地的状态值
    isLogined: !!localStorage.getItem('x-auth-token')
  },
  getters: {
  },
  mutations: {

    changeisLogined (state, payload) {
      state.isLogined = payload
    }
  },
  actions: {
  },
  modules: {
  }
}
