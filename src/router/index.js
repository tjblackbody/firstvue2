import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuanBushangpin from '../views/QuanBushangpin.vue'
import store from '@/store'
import Cart from '@/components/user/Cart.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/QuanBushangpin',
    name: 'QuanBushangpin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: QuanBushangpin
  },
  {
    path: '/Dataxiangqing',
    name: 'Dataxiangqing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dataxiangqing.vue')
  },
  {
    path: '/Goods',
    name: 'Goods',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Goods.vue')
  },
  {
    path: '/GeRenzhongxin',
    name: 'GeRenzhongxin',
    redirect: '/GeRenzhongxin/Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GeRenzhongxin.vue'),
    children: [
      {
        path: 'Cart',
        component: Cart
      }
    ]

  },
  {
    path: '/WoDedingdan',
    name: 'WoDedingdan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WoDedingdan.vue')
  },
  {
    path: '/ZhuanShufuli',
    name: 'ZhuanShufuli',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ZhuanShufuli.vue')
  }

]

const router = new VueRouter({
  routes
})

// 路由导航
router.beforeEach((to, from, next) => {
  // 每个路由都进不来
  // 业务逻辑：没登录进入不了个人中心
  // 检测有无登录
  // 判断用户是不是进入个人中心
  if (to.path === '/GeRenzhongxin') {
    const token = localStorage.getItem('x-auth-token')
    if (token) {
      next()
    } else {
      store.dispatch('isshowPromt/asyncchangeisshowPromt', {
        msg: '请先登录',
        type: 'warning'
      })
      return
    }
  }
  next()
  // next放行才能进
})
export default router
