import React from "react"
import Me from '../assets/img/eu.jpg'

import { AboutConteiner } from "../components/views/AboutStyles"

const About = props => (
    <AboutConteiner>
        <div className="row  bg-secondary bg-gradient">
            <div className="align-self-center col-md-6 col-sm-12 ps-5">
                <img src={Me} className="mx-auto d-block img-thumbnail" alt='Foto Jeová Henrique'/>
            </div>
            <div className="align-self-center col-md-6 col-sm-12">
                <h2>Quem sou</h2>
                <p className="text-start text-break">
                    Me Chamo <text>Jeová Henrique</text>, sou graduando em Ciências e Tecnologia 
                    com ênfase em Computação Aplicada, 
                    Atualmente trabalho como freelancer, desenvolvendo aplicativos mobile e 
                    sites responsivos, e-commerce, blogs entre outros.
                </p>
                <button>Download CV</button>
            </div>
        </div>

    </AboutConteiner>
)

export default About