import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Links from './Links'

const App = () => (
  <Router>
    <div className='app-container'>
      <Route path="/" component={Links} />
    </div>
  </Router>
)

export default App
