import React from "react"
import Me from '../../assets/img/eu.jpg'
import Curriculum from '../../assets/doc/Curriculum.pdf'

import { AboutConteiner } from "../styles/AboutStyles"

const About = props => (
    <AboutConteiner className="row  bg-secondary bg-gradient">
            <div className="align-self-center col-md-6 col-sm-12 ps-5">
                <img src={Me} className="mx-auto d-block img-thumbnail" alt='Foto Jeová Henrique'/>
            </div>
            <div className="align-self-center col-md-6 col-sm-12 pt-5">
                <h2>Quem sou</h2>
                <p className="text-start text-break">
                    Me Chamo <text>Jeová Henrique</text>, sou graduando em Ciências e Tecnologia 
                    com ênfase em Computação Aplicada, 
                    Atualmente trabalho como freelancer, desenvolvendo aplicativos mobile e 
                    sites responsivos, e-commerce, blogs entre outros.
                </p>
                <a href={Curriculum} download>
                    <button>Download CV</button>
                </a>
            </div>
    </AboutConteiner>
)

export default About