import axios from "axios";
import { baseUrl } from "./_env";

export default {
  // 하기 각각을 endpoint라고 한다
  list: () => axios.get(`${baseUrl}/weeklyDataUploaded`),
  post: (data) => axios.post(`${baseUrl}/weeklyDataUploaded`, data),
  rewrite: (data) => axios.put(`${baseUrl}/weeklyDataUploaded`, data),
  delete: (id) => axios.delete(`${baseUrl}/weeklyDataUploaded/${id}`),
};
