import axios from 'axios'
const cc = data => {
  return axios({
    url: process.env.API_HOST + '/sys/meal/mealList',
    method: 'post',
    data
  })
}
const aa = data => {
  return axios({
    url: process.env.API_HOST + '/sys/meal/mealList',
    method: 'post',
    data
  })
}
const bb = data => {
  return axios({
    url: process.env.API_HOST + '/sys/meal/mealList',
    method: 'post',
    data
  })
}
export default {
  cc,
  aa,
  bb
}
