import httpInstance from '@/utils/http'

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @returns {Promise<httpInstance.AxiosResponse<any>>}
 */
export function getCategoryAPI (id) {
  return httpInstance.get(`/category/?id=${id}`)
}
