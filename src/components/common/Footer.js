import React from 'react'
import Logo from '../../assets/giphy.png'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-three-quarters-desktop is-full-mobile has-text-centered-mobile">
            <span>Created by Emma & Katie </span>
            <span className="icon">
              <i className="fab fa-angellist"></i>
            </span>
            <span> GA SEI 47 </span>
          </div>
          <div className="column is-narrow is-one-quarter-desktop is-full-mobile has-text-centered-mobile">
            <img src={Logo} alt="Powered by GIPHY" />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer