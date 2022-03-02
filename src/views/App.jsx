import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from '../components/Menu'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Abiliity from './Abiliity'

const App = props => (
    <div className="container-fluid">
        <Menu />
        <section id='Home'>
            <Home />
        </section>
        <section id='About'>
            <About />
        </section>
        <section id='Projects'>
            <Projects />
        </section>
        <section id='Abiliity'>
            <Abiliity/>
        </section>
    </div>
)

export default App