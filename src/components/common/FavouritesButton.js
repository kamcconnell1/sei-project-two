import React from 'react'

import { toast } from '../../lib/notifications'


const favourites = []

const FavouritesButton = (favourite) => {


  const addToFavourites = () => {
    toast('Added')

    favourites.push(favourite.favourite)
    localStorage.setItem('favourites', JSON.stringify(favourites))
    console.log('added to:', favourites)
  }

  return (
    <button onClick={addToFavourites} type="button" className="button gif-button">
      <span className="icon">
        <i className="fas fa-heart"></i>
      </span>
      <span>Add to favourites</span>
    </button>
  )
}
export default FavouritesButton