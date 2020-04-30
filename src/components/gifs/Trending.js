import React from 'react'
import axios from 'axios'


import TrendingCard from './TrendingCard'


class Trending extends React.Component {
state = {
  trending: [],
  copied: false
}

async componentDidMount() {
  // console.log(this.state.tredning)
  try {
    const res = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=BKW4vtptPcAlCG1mhESJtSgdfRScl4eQ&limit=20&rating=G')
    // console.log(res.data.data)
    this.setState({ trending: res.data.data })
  } catch (err) {
    console.log(err)
  }
}


render() {
  console.log(this.state.trending)
  
  return (
    <section className="section trending">
      <div className="container">
        <div className="columns is-multiline">
          {this.state.trending.map(gif => (
            <TrendingCard key={gif.id} {...gif} />
          ))}
        </div>
      </div>
    </section>
  )
}
}

export default Trending 