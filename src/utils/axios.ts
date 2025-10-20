import axios from 'axios'
import type {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios'

interface BaseResponse<T = any> {
  code: number
  data: T
  message?: string
  success?: boolean
  [key: string]: any
}

interface CustomRequestConfig extends AxiosRequestConfig {
  showToast?: boolean
}

const baseURL =
  import.meta.env.VUE_APP_BASE_API_URL || import.meta.env.VITE_APP_BASE_API_URL || '/api'

const request: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
} as CustomRequestConfig)

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response: AxiosResponse<BaseResponse>): any => {
    // debug
    if (import.meta.env.DEV) {
      ;(window as any).response = response
    }

    const { status, data } = response

    if (status === 200 && data.code === 200) {
      return data
    }

    // err
    const errorMessage = data.message || '请求失败'
    console.error('Error toast method not found:', errorMessage)
    return Promise.reject(new Error(errorMessage))
  },
  (error: AxiosError): Promise<AxiosError> => {
    // 错误处理
    let errorMessage = '网络错误，请稍后重试'

    if (error.response) {
      const responseData = error.response.data as any
      errorMessage = responseData?.message || `请求失败: ${error.response.status}`
    } else if (error.request) {
      errorMessage = '网络连接失败，请检查网络'
    } else {
      // 其他错误
      errorMessage = error.message
    }

    // 显示错误提示

    console.error('Error toast method not found:', errorMessage)
    return Promise.reject(error)
  },
)

// 导出类型
export type { BaseResponse, CustomRequestConfig }
export default request
