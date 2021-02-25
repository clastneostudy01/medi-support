import axios from 'axios'
import { baseUrl } from './_env'

// 사용하기 전에 weeklyData 파일 수정해놓을 것. Afternoon 대신에 Night넣어놨더라.

export default {
  // GET http://....:3000/list
  list: () => axios.get(`${baseUrl}/weeklyData`),
  // GET http://....:3000/list/:id
  get: (id) => axios.get(`${baseUrl}/weeklyData/${id}`),
  // GET http://....:3000/list?q=keyword
  search: (keyword) => axios.get(`${baseUrl}/weeklyData?q=${keyword}`), 
}