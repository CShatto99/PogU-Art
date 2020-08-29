import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import AllArt from './components/AllArt'
import TopArt from './components/TopArt'
import Authors from './components/Authors'

const App = () => {
  return (
    <div>
      <Router>
        <AppNavbar />
        <Container className='mt-3'>
          <Switch>
            <Route exact path='/' component={AllArt} />
            <Route exact path='/top' component={TopArt} />
            <Route exact path='/authors' component={Authors} />
          </Switch>
        </Container>
      </Router>
    </div>
  )
}

export default App
