import httpInstance from '@/utils/http'

// 获取 banner
export function getBannerAPI () {
  return httpInstance.get('/home/banner')
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance.get('/home/new')
}
