import httpInstance from '@/utils/http'

/**
 * @description获取 banner
 * @param params
 * @returns {Promise<httpInstance.AxiosResponse<any>>}
 */
export function getBannerAPI (params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return httpInstance.get(`/home/banner/?distributionSite=${distributionSite}`)
}

/**
 * @description获取新鲜好物
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance.get('/home/new')
}

/**
 * @description获取人气推荐
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance.get('home/hot')
}

/**
 * @description获取所有商品模块
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance.get('/home/goods')
}
