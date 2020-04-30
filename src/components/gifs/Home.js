import React from 'react'
import axios from 'axios'
const favourites = []
class Home extends React.Component {
  state = {
    gifs: [],
    tags: ''
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
      <section className="section">
        <div className="container">
          <h1 className="title is-1 has-text-centered">What do you meme?</h1>
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
              <div className="control">
                <input 
                  className="input" 
                  placeholder="Search for GIF"
                  name="name"
                  onChange={this.handleChange}
                />
                <button type="submit" className="button is-primary">Search</button>
              </div>
            </form>
            <img src={this.state.gifs.url} alt={this.state.gifs.name}/>
            <button onClick={this.handleClick} type="button" className="button is-primary">Try again</button>
            <button onClick={this.addToFavourites} type="button" className="button">Add to favourites</button>
          </div>
        </div>
      </section>
    )
  }
}
export default Home