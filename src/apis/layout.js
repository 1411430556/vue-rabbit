import httpInstance from '@/utils/http'

/**
 *
 * @returns {Promise<httpInstance.AxiosResponse<any>>}
 */
export function getCategoryAPI () {
  return httpInstance.get('/home/category/head')
}
