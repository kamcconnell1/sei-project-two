import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/trending" className="navbar-item">Trending</Link>
          <Link to="/favourites" className="navbar-item">Favourites</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar