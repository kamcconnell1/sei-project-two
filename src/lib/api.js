import axios from 'axios'


const baseUrl = 'api.giphy.com/v1/gifs'


const withHeaders = () => {
  return {
    headers: { api_key: 'BKW4vtptPcAlCG1mhESJtSgdfRScl4eQ' }
  }
}


export const getRandomGif = () => {
  return axios.get('https://api.giphy.com/v1/gifs/random?api_key=BKW4vtptPcAlCG1mhESJtSgdfRScl4eQ&tag=laugh&rating=PG')
}