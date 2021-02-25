import axios from 'axios'
import { baseUrl } from './_env'

// 사용하기 전에 weeklyData 파일 수정해놓을 것. Afternoon 대신에 Night넣어놨더라.

// map 내의 filter함수를 이용해 걸러낸 데이터를 수정?
// API 중에서는 PATCH,

export default {
  // GET http://....:3000/list
  list: () => axios.get(`${baseUrl}/weeklyData`),
  // GET http://....:3000/list/:id
  get: (id) => axios.get(`${baseUrl}/weeklyData/${id}`),
  // GET http://....:3000/list?q=keyword
  search: (keyword) => axios.get(`${baseUrl}/weeklyData?q=${keyword}`), 
 
}