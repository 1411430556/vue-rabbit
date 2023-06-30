import httpInstance from '@/utils/http'

// 获取 banner
export function getBannerAPI () {
  return httpInstance.get('/home/banner')
}
