import axios from "axios";
import {CancelToken} from "axios";
// 创建一个取消令牌实例
const cancelToken = axios.CancelToken.source();
const httpInstance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 5000,
    cancelToken: cancelToken.token
})


//axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config;
}, e => Promise.reject(e))

//axios请求拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    Promise.reject(e)
})

export default httpInstance