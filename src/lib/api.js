import axios from 'axios'
const baseUrl = 'https://api.giphy.com/v1/gifs'
const apiKey = 'api_key=BKW4vtptPcAlCG1mhESJtSgdfRScl4eQ'
export const getPageLoadGif = () => {
  return axios.get(`${baseUrl}/translate?${apiKey}&s=funny`)
}
export const getSearchResultGif = tags => {
  return axios.get(`${baseUrl}/translate?${apiKey}&s=${tags}`)
}
export const getTryAgainGif = tags => {
  return axios.get(`${baseUrl}/random?${apiKey}&tag=${tags}`)
}

export const getTrendingGifs = () => {
  return axios.get(`${baseUrl}/trending?${apiKey}&limit=20&rating=G`)
}