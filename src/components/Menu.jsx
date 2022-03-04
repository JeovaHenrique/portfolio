/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../assets/img/Logo.jpg'

import { Logoimg } from '../components/styles/Menu.styles'

const Menu = props => (
    <Navbar className='row' collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
        <Container>
            <Navbar.Brand className='ps-2 fs-4' 
            href="#Home">
                <Logoimg src={Logo} alt="Logo" /> Jeová Henrique
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <AnchorLink href='#Home' className='nav-link ' aria-current="page">Home</AnchorLink>
                        <AnchorLink href='#About' className='nav-link'>Quem sou</AnchorLink>
                        <AnchorLink href='#Projects' className='nav-link'>Projetos</AnchorLink>
                        <AnchorLink href='#Abiliity' className='nav-link'>Habilidade</AnchorLink>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>

)


export default Menu