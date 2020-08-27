import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import Collage from './components/Collage'
import Authors from './components/Authors'

const App = () => {
  return (
    <div>
      <Router>
        <AppNavbar />
        <Container className='mt-3'>
          <Switch>
            <Route exact path='/' component={Collage} />
            <Route exact path='/authors' component={Authors} />
          </Switch>
        </Container>
      </Router>
    </div>
  )
}

export default App
