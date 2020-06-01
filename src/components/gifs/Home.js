import React from 'react'
import { getPageLoadGif, getSearchResultGif, getTryAgainGif } from '../../lib/api'
import FavouritesButton from '../common/FavouritesButton'
import CopyButton from '../common/CopyButton'


class Home extends React.Component {
  state = {
    gifs: [],
    tags: '',
    copied: false
  }
  async componentDidMount() {
    // console.log(this.state.tags)
    try {
      // console.log(res.data.data.images.original)
      const res = await getPageLoadGif()
      this.setState({ gifs: res.data.data.images.original })
    } catch (err) {
      console.log(err)
    }
  }
  handleChange = event => {
  // console.log(event.target.value)
    this.setState({ tags: event.target.value })
  }
  handleSubmit = async (event) => {
    console.log('clicked search')
    event.preventDefault()
    try {
      const res = await getSearchResultGif(this.state.tags)
      // console.log(res.data.data)
      this.setState({ gifs: res.data.data.images.original })
    } catch (err) {
      console.log(err.response)
    }
  }
  handleClick = async() => {
    console.log('clicked try again')
    try {
      const res = await getTryAgainGif(this.state.tags)
      console.log(res.data.data)
      this.setState({ gifs: res.data.data.images.original })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    // console.log(this.state.gifs.url)
    // console.log(this.state.tags)
    // console.log(...this.state.favourites)
    return (
      <section className="section home-page">
        <div className="container">
          <h1 className="title is-1 has-text-centered">Get-a-Gif</h1>
          <div className="column is-10 is-offset-1">
            <form onSubmit={this.handleSubmit}>
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input 
                    className="input is-medium" 
                    placeholder="Search for GIF"
                    name="name"
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="button is-medium">Search</button>
              </div>
            </form>
          </div>
          <div className="column is-6 is-offset-3">
            <div className="control">
              <img className="gif" src={this.state.gifs.url} alt={this.state.gifs.name}/>
            </div>
            <div className="column">
              <div className="buttons control is-centered">
                <button onClick={this.handleClick} type="button" className="button gif-button">
                  <span className="icon">
                    <i className="far fa-grin-tongue-squint"></i>
                  </span>
                  <span>Try again</span></button>

                <FavouritesButton favourite={this.state.gifs.url} />
                <CopyButton copy={this.state.gifs.url} />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Home