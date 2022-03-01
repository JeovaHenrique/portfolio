import React from 'react'
import {Routes, Route} from 'react-router-dom'

import About from '../views/About'
import Contacts from '../views/Contacts'
import Home from '../views/Home'
import Projects from '../views/Projects'

const Content = props => (
    <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
    </main>

)


export default Content 