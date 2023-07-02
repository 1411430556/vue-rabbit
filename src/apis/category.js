import httpInstance from '@/utils/http'

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @returns {Promise<httpInstance.AxiosResponse<any>>}
 */
export function getCategoryAPI (id) {
  return httpInstance.get(`/category?id=${id}`)
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getCategoryFilterAPI = (id) => {
  return httpInstance.get(`/category/sub/filter?id=${id}`)
}
