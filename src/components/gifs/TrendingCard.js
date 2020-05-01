import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import CopyButton from '../common/CopyButton'
import FavouritesButton from '../common/FavouritesButton'
import Spinner from '../common/Spinner'

const TrendingCard = ({ images }) => {
  // console.log(images.original.url)
  // console.log(images)



  return (
    <div className="column is-fullwidth-mobile is-half-tablet is-one-quarter-desktop card">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">

            <LazyLoadImage
              placeholder={<Spinner />}
              alt={'gif'}
              src={images.original.url}
            />
          </figure>
        </div>
        {/* <button onClick={testToast}>Test</button> */}
        <CopyButton copy={images.original.url} />
        <FavouritesButton  favourite={images.original.url} />
      </div>
    </div>
  )
}
export default TrendingCard