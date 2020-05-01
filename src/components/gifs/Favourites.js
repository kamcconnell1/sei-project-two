import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import FavouritesError from './FavouritesError'
import CopyButton from '../common/CopyButton'

const Favourites = () => {
  const JSONfavourites = localStorage.getItem('favourites')
  const realfavourites = JSON.parse(JSONfavourites)
  console.log(realfavourites)
  
  if (!realfavourites) return <FavouritesError />


  return (
    <section className="section favourites">
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
                <CopyButton copy={gif} />
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}
export default Favourites