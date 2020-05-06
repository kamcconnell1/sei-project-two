import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notifications from 'react-notify-toast'



import Navbar from './components/common/Navbar'
import Home from './components/gifs/Home'
import Trending from './components/gifs/Trending'
import Favourites from './components/gifs/Favourites'
import Footer from './components/common/Footer'


console.log(process.env.REACT_APP_MY_SECRET_KEY)


const App = () => {
  return (
    <BrowserRouter>
      <Notifications/>
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