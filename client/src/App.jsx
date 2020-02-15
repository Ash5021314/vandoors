import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Advantage from './Pages/Advantage'
import Catalog from './Pages/Catalog'
import Contact from './Pages/Contact'
import Landing from './Components/Landing'
import Footer from './Components/Footer'
import Catalogs from './Pages/Catalogs'


function App() {
  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/advantage" component={Advantage}/>
          <Route exact path="/catalog" component={Catalog}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/catalogs" component={Catalogs}/>
        </Switch>
      </Router>
      <Footer/>
    </>
  )
}

export default App

