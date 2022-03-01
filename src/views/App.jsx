import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom'

import Content from '../components/Content'
import Menu from '../components/Menu'

const App = props => (
    <div className="container-fluid">
        <Router>
            <Menu/>
            <Content/>
        </Router>
    </div>
)

export default App