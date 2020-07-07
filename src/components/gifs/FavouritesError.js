import React from 'react'
const FavouritesError = () => {
  return (
    <section className="section favourites-error">
      <div className="container">
        <div className="content has-text-centered">
          <h2 className="title is-2">Oops, looks like you don&apos;t have any favourites yet!</h2>
          <h3>Navigate to <a href="/">Home</a> to add some now or check out the <a href="/trending">Trending GIFS</a> page</h3>
          <img src="https://media3.giphy.com/media/YrBRYRDN4M5ryrNOND/giphy.gif?cid=cf3075e27d9bda1929f42c02bfddf095c9a60c08bd3a23b4&rid=giphy.gif" alt="error gif"/>
        </div>
      </div>
    </section>
  )
}
export default FavouritesError