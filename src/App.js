import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/gifs/Home'
import Trending from './components/gifs/Trending'
import Favourites from './components/gifs/Favourites'
import Footer from './components/common/Footer'




const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trending" component={Trending} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
export default App