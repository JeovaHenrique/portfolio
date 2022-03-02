/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Menu = props => (
    <nav className='row fixed-top navbar navbar-expand-md navbar-dark bg-dark bg-gradient pt-3 fw-bold px-5 '>
        <div className="container-fluid">
            <button type="button" className="navbar-toggler" 
             data-bs-toggle="collapse" data-bs-target="#navbarToggler" 
             aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className='navbar-brand ps-2 fs-4' href='#'> Jeová Henrique</a>
                        
            <div className='navbar-collapse collapse fs-5' id='navbarToggler'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item '>
                            <AnchorLink href='#Home' className='nav-link ' aria-current="page">Home</AnchorLink>    
                    </li>
                    <li className='nav-item'>
                            <AnchorLink href='#About' className='nav-link'>Quem sou</AnchorLink>
                    </li>
                    <li className='nav-item'>
                            <AnchorLink href='#Projects' className='nav-link'>Projetos</AnchorLink>
                    </li>
                    <li className='nav-item'>
                            <AnchorLink href='#Abiliity' className='nav-link'>Habilidade</AnchorLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    
)


export default Menu