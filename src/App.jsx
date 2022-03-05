import React from 'react'


import Menu from './components/Menu'
import Home from './components/views/Home'
import About from './components/views/About'
import Projects from './components/views/Projects'
import Abiliity from './components/views/Abiliity'
import Footer from './components/views/Footer'

const App = props => (
    <div>
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
            <Footer/>
    </div>
)

export default App