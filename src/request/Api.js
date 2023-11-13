import request from '@/request/request'
import qs from 'qs'
export const jingpingAPI = (params) => request.get('/products/recommend', qs.stringify(params))
// 热门兑换
export const RenmenAPI = (params) => request.get('/products/hot', qs.stringify(params))
// 请求验证码api
export const sendAPI = (params) => request.post('/sendSMS', qs.stringify(params))

// 登录api
export const PCloginAPI = (params) => request.post('/phoneRegin', qs.stringify(params))

// 微信登录api
export const weixinloginAPI = (params) => request.post('/wechatUsers/PCLogin', qs.stringify(params))

// 用户信息请求api
export const UserProfilesAPI = (params) => request.get('/shop/userProfiles', qs.stringify(params))
// 详情api
export const GoodDetailsAPI = (id) => request.get(`/products/${id}`)

// 请求购物车

export const shopcarAPI = (params) => request.post('/shop/carts/add', qs.stringify(params))

// 商品搜索

export const GoodDetailssousuoAPI = (params) => request.get('/products', { params: params })

// 购物车渲染封装

export const cartdataAPI = (params) => request.get('/shop/carts', qs.stringify(params))

/// 购物车删除

export const deletaDetailsAPI = (id) => request.get('/shop/carts?productIds={id}')
