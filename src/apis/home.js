import httpInstance from '@/utils/http'

// 获取 banner
export function getBannerAPI () {
  return httpInstance.get('/home/banner')
}

/**
 * @description: 获取新鲜好物
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance.get('/home/new')
}

/**
 * @description: 获取人气推荐
 * @return {*}
 */
export const getHotAPI = () => {
  return  httpInstance.get('home/hot')
}

/**
 * @description: 获取所有商品模块
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance.get('/home/goods')
}
