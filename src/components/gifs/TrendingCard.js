import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const TrendingCard = ({ images }) => {
  
  // console.log(images.original.url)
  
  // console.log(images)
  
  return (
    <div className="column is-fullwidth-mobile is-half-tablet is-one-quarter-desktop card">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={images.original.url} alt={'gif'} />
          </figure>
        </div>
        <CopyToClipboard text={images.original.url}>
          <button type="button" className="button">
            <span className="icon">
              <i className="far fa-copy"></i>
            </span>
            <span>Copy to clipboard</span></button>
        </CopyToClipboard>
      </div>
    </div>




  )
}

export default TrendingCard