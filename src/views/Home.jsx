import React from "react"
import face from '../assets/img/facebook.png'
import insta from '../assets/img/instagram.png'
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'

import { HomeConteiner } from "../components/views/HomeStyles"

const Home = props => (
    <HomeConteiner className="row">
        <div className="ps-5">
            <h2>Olá, Eu sou</h2>
            <h1>Jeová Henrique</h1>
            <p>Full stack developer e Mobile</p>
            <a href="https://github.com/JeovaHenrique" target="_blank"><img src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/jeova-henrique/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
            <a href="https://www.instagram.com/jeova_henrique/" target="_blank"><img src={insta} alt="instagram" /></a>
            <a href="https://www.facebook.com/jeova.henrique.1" target="_blank"><img src={face} alt="facebook" /></a>
        </div>
    </HomeConteiner>
)

export default Home