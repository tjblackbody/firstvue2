export default {
  namespaced: true,
  state: {
    // 显示登录模块的隐藏
    isshowPromt: false,
    msg: '',
    type: ''
  },
  getters: {
  },
  mutations: {
    changeisshowPromt (state, payload) {
      state.isshowPromt = payload.isshowPromt
      state.msg = payload.msg
      state.type = payload.type
    }
  },
  actions: {
    asyncchangeisshowPromt (context, payload) {
      context.commit('changeisshowPromt', {
        isshowPromt: true,
        msg: payload.msg,
        type: payload.type
      })
      setTimeout(() => {
        context.commit('changeisshowPromt', {
          isshowPromt: false,
          msg: payload.msg,
          type: payload.type
        })
      }, 1500)
    }
  },
  modules: {
  }
}
