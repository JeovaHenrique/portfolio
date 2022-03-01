/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'


const Menu = props => (
    <aside className="row">
        
        <nav className='navbar navbar-expand navbar-dark bg-dark bg-gradient pt-3 fw-bold px-5 '>
            <a href=''className='navbar-brand ps-2 fs-4'> Jeová Henrique</a>
                    
            <div className='collapse navbar-collapse fs-5' id='nav-target'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link'>Quem sou</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-link'>Projetos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contacts' className='nav-link'>Contatos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
    
)


export default Menu