import { UserProfilesAPI } from '@/request/Api'

export default {
  namespaced: true,
  state: {
    userInfo: {
      nickName: '游客',
      // 鸡腿数
      coin: '99',
      headImg: require('../../assets/img/userImg.f8bbec5e.png')
    },

    cartTotal: '666'
  },
  getters: {
  },
  mutations: {
    changeUserinfo (state, payload) {
      state.cartTotal = payload.cartTotal
      state.userInfo = payload.userInfo
    },
    inituserqingkong (state) {
      state.cartTotal = 0
      state.userInfo = {
        nickName: '游客',
        // 鸡腿数
        coin: 0,
        headImg: require('../../assets/img/userImg.f8bbec5e.png')
      }
    }
  },
  actions: {
    async asyncchangeUserinfo ({ commit }) {
      const userinfores = await UserProfilesAPI()
      commit('changeUserinfo', userinfores.data)
    }
  },
  modules: {
  }
}
