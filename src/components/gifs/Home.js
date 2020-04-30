import React from 'react'
import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard'


const favourites = []
class Home extends React.Component {
  state = {
    gifs: [],
    tags: '',
    copied: false
  }

  async componentDidMount() {
    // console.log(this.state.tags)
    try {
      const res = await axios.get('https://api.giphy.com/v1/gifs/translate?api_key=BKW4vtptPcAlCG1mhESJtSgdfRScl4eQ&s=happy')
      // console.log(res.data.data.images.original)
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
      const res = await axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=BKW4vtptPcAlCG1mhESJtSgdfRScl4eQ&s=${this.state.tags}`)
      // console.log(res.data.data)
      this.setState({ gifs: res.data.data.images.original })
    } catch (err) {
      console.log(err)
    }
  }
  handleClick = async() => {
    console.log('clicked try again')
    try {
      const res = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=BKW4vtptPcAlCG1mhESJtSgdfRScl4eQ&tag=${this.state.tags}`)
      // console.log(res.data.data)
      this.setState({ gifs: res.data.data.images.original })
    } catch (err) {
      console.log(err)
    }
  }
  addToFavourites = () => {
    // this.setState(previousState => ({
    //   favourites: [...previousState.favourites, this.state.gifs.url]
    // }))
    favourites.push(this.state.gifs.url)
    console.log('added to:', favourites)
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }
  render() {
    // console.log(this.state.gifs.url)
    // console.log(this.state.tags)
    // console.log(...this.state.favourites)
    return (
      <section className="section home-page">
        <div className="container">
          <h1 className="title is-1 has-text-centered">What do you meme?</h1>
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
          <div className="column is-7 is-offset-2">
            <div className="control">
              <img className="gif" src={this.state.gifs.url} alt={this.state.gifs.name}/>
            </div>
            <div className="column">
              <div className="buttons control is-centered">
                <button onClick={this.handleClick} type="button" className="button gif-button">Try again</button>
                <button onClick={this.addToFavourites} type="button" className="button gif-button">
                  <span className="icon">
                    <i className="fas fa-heart"></i>
                  </span>
                  <span>Add to favourites</span>
                </button>

                <CopyToClipboard text={this.state.gifs.url}
                  onCopy={() => this.setState({ copied: true })}>
                  <button type="button" className="button gif-button">Copy to clipboard</button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Home

