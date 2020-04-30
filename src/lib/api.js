import axios from 'axios'


const baseUrl = 'https://api.giphy.com/v1/gifs'





export const getRandomGif = () => {
  return axios.get('https://api.giphy.com/v1/gifs/random?api_key=BKW4vtptPcAlCG1mhESJtSgdfRScl4eQ&tag=laugh&rating=PG')
}