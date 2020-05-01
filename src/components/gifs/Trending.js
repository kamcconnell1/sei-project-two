import React from 'react'
import axios from 'axios'

import { getTrendingGifs } from '../../lib/api'
import TrendingCard from './TrendingCard'

class Trending extends React.Component {
state = {
  trending: []
}
async componentDidMount() {
  // console.log(this.state.tredning)
  try {
    const res = await getTrendingGifs()
    this.setState({ trending: res.data.data })
  } catch (err) {
    console.log(err)
  }
}
render() {
  // console.log(this.state.trending)
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