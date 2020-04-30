import React from 'react'
import { getRandomGif } from '../../lib/api'



class Home extends React.Component {
state = {
  gifs: []
}

async componentDidMount() {
  try {
    const res = await getRandomGif()
    console.log(res.data.data)
    this.setState({ gifs: res.data.data })
  } catch (err) {
    console.log(err)
    
  }
}

render() {
  console.log(this.state.gifs.image_url)
  // const { data } = this.state.gifs
  return (
    <>
      <h1>Happy Thursday </h1>
      <img src={this.state.gifs.image_url}/>
    </>
  )
}
}

export default Home


// data.data.embed_url