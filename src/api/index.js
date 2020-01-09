import { request } from './request'

export let api = {
  aa(data){
    return request({
      url: '/aa',
      method: 'GET',
      data: data
    })
  },
  bb(data){
    return request({
      url: '/bb',
      method: 'POST',
      data: data
    })
  }
}
