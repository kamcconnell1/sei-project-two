import axios from 'axios'
const baseUrl = 'https://api.giphy.com/v1/gifs'
const apiKey = `api_key=${process.env.REACT_APP_MY_SECRET_KEY}`


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
