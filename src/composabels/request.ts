import { $fetch, FetchOptions } from 'ofetch'
import {ElMessage} from "element-plus";
enum fetchMethod {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT'
}
/*
@base: 基础路径 可选
@url: 请求路径  必填
@method: 请求方法 必填 参数类型为枚举类型
@fetchOptions: 请求配置项 可选
 */
export function $request(url: string, method: fetchMethod, base?: string, fetchOptions?: FetchOptions<ResponseTypeCustom>) {
    if (base) {
        url = base + url
    }
    // 检查请求方法
    if (!fetchMethod[method]) {
        throw new Error('请求方法不存在')
    }
    // 处理fetchOptions
    if (fetchOptions) {
        fetchOptions.method = method
    } else {
        fetchOptions = {
            method: method
        }
    }
    // 处理完后使用service发送请求
    return service(url, fetchOptions)
}

const service = $fetch.create({
    async onRequestError({ request, options, error }) {
        // TODO 请求错误拦截
        console.error('request', request, options, error)
        ElMessage.error('网络错误')
    },
    async onResponse({ request, response, options }) {
        // TODO 响应拦截
        return new Promise((resolve, reject) => {
            if (response.status === 401) {
                ElMessage.error('登录状态过期，请重新登录！')
            }
            if (!response._data?.errorCode) {
                resolve((response as any))
            } else {
                ElMessage.error('请求失败 - ' + (response._data.message || '未知错误'))
                reject(response._data)
            }
        })
    },
    async onResponseError({ request, response, options }) {
        // TODO 响应错误拦截
        if (response.status.toString().startsWith('4') || response.status.toString().startsWith('5')) {
            console.error('optionsoptionsoptions', options, response)
            ElMessage.error('请求失败')
        }
    },
})

