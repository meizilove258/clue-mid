import axios from 'axios'
import qs from 'qs'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/default';
} else {
  axios.defaults.baseURL = 'http://admin.xcx.leju.com/'
}


export const request = ({url, method, data}) => {
  if (typeof(method) === 'undefined') {
    method = 'GET'
  }
  method = method.toUpperCase();
  if (method === 'GET') {
    url = url + '?' + qs.stringify(data);
  }
  return new Promise((resolve, reject) => {
    if (method === 'GET') {
      axios({
        method,
        url,
      }).then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject('error')
        }
      })
    } else if (method === 'POST') {
      axios({
        method,
        url,
        data,
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject('error')
        }
      })
    }
  })
}
