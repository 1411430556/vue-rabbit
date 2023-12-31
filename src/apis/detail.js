import httpInstance from '@/utils/http'

/**
 * @description获取基础数据
 * @param id
 * @returns {Promise<httpInstance.AxiosResponse<any>>}
 */
export function getDetail (id) {
  return httpInstance.get(`/goods?id=${id}`)
}

/**
 * @description获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return httpInstance.get(`/goods/hot?id=${id}&type=${type}&limit=${limit}`)
}
