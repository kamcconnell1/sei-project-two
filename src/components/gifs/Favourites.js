import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Favourites = () => {
  const JSONfavourites = localStorage.getItem('favourites')
  const realfavourites = JSON.parse(JSONfavourites)
  console.log(realfavourites)
  if (!realfavourites) return <h2 className="title is-2 is-warning">Oops, looks like nothing has been added yet. Go back to add now!</h2>
  //--------------------------------NEED TO ADD GIF HERE & TIMEOUT?---------------------------------------------

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
                <CopyToClipboard text={gif}>
                  <button type="button" className="button">
                    <span className="icon">
                      <i className="far fa-copy"></i>
                    </span>
                    <span>Copy to clipboard</span></button>
                </CopyToClipboard>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}
export default Favourites