import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { useAppAuth } from '~/store/auth'
import { useAppStore } from '~/store/app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const i18n: any = (nuxtApp as any).$i18n

  const appAuth = useAppAuth()

  const sessionToken = useCookie<string | null>('jwt_token')
  const guest_token = useCookie('user_guest_token')


  const api: AxiosInstance = axios.create({
    baseURL: config.public.baseURL,
    headers: {
      common: {
        'Accept-Language': i18n?.locale?.value || 'ar',
        Accept: 'application/json',
      },
    },
  })

  api.interceptors.request.use(
    (req: AxiosRequestConfig & { headers?: any; params?: any; skipLocation?: boolean } = {}) => {
      req.headers = req.headers || {}
      req.params = req.params || {}

      req.headers['Accept-Language'] = i18n?.locale?.value || 'en'

      if (sessionToken.value) {
        req.headers.Authorization = `Bearer ${sessionToken.value}`
      } else if (guest_token?.value) {
        req.params.guest_token = req.params.guest_token ?? guest_token.value
      }
     
      return req
    }
  )


  api.interceptors.response.use(
    (res) => res,
    (error) => {
      const status = error?.status
      if (status === 401) {
        appAuth.userData = null
        appAuth.token = null
        useCookie('session_user_token').value = null
        useCookie('session_user_data').value = null
        useCookie('user_guest_token').value = null
        return Promise.reject({ statusCode: 401, message: 'Unauthorized' })
      }

      const message = error?.message ?? 'Something went wrong'
    }
  )

  return {
    provide: {
      axios: api,
      api: api,
      axiosToken: axios,
    },
  }
})
