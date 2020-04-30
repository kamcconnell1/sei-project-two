import React from 'react'
const Favourites = () => {
  const JSONfavourites = localStorage.getItem('favourites')
  const realfavourites = JSON.parse(JSONfavourites)
  // console.log(realfavourites)
  if (!realfavourites) return 'Oops, add your favourites'
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {realfavourites.map((gif, i) => (
            <div key={i} className="column is-fullwidth-mobile is-half-tablet is-one-quarter-desktop card">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={gif} alt={'gif'} />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Favourites