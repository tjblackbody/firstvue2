import axios from 'axios'
// 创建axios实例
const instance = axios.create({
  baseURL: 'http://tech.wolfcode.cn:8881/cms',
  timeout: 5000
})

// 封装请求拦截器
instance.interceptors.request.use(config => {
  console.log('请求拦截器里的代码', config)
  const mytoken = localStorage.getItem('x-auth-token')
  if (mytoken) {
    config.headers['x-auth-token'] = mytoken
  }

  return config
}, err => {
  return Promise.reject(err)
})

// 封装响应拦截器
// 是接口数据返回给我们的时候提前拦截
instance.interceptors.response.use(res => {
  console.log('响应拦截器中的res', res.data)
  // retrun到组件内部请求的res
  const resdata = res.data
  if (resdata.code !== 0) {
    alert(resdata.message)
    return
  }
  return resdata
}, err => {
  return Promise.reject(err)
})
export default instance
