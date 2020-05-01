import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'



const Spinner = () => {
  return (
    <div className="Loading">
      <Loader type="TailSpin" color="#ffd539" height="50" width="50" />
    </div>
  )
}
export default Spinner