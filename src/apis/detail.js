import httpInstance from '@/utils/http'

export function getDetail (id) {
  return httpInstance.get(`/goods?id=${id}`)
}
