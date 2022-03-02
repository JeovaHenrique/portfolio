import React from "react"
import reactnative from '../assets/img/react-native.png'
import javascript from '../assets/img/javascript.png'
import html5 from '../assets/img/html-5.png'
import nodejs from '../assets/img/nodejs.png'
import bootstrap from '../assets/img/bootstrap.png'
import css3 from '../assets/img/css3.png'
import php from '../assets/img/php.png'

import { AbiliityConteiner } from "../components/views/AbiliityStyle"

const Contacts = props => (
    <AbiliityConteiner className="row  bg-secondary bg-gradient">
        <div className="col-12 text-center mt-5 px-5">
            <h2>Habilidade</h2>
        </div>
        <div className="container col-10">
            <div className="row justify-content-md-center">
                <div className="col-md-3 border border-3 rounded-3 bg-light bg-gradient m-1 py-1">
                    <img src={reactnative} alt="react/reactNative" className="rounded mx-auto d-block"/>
                </div>
                <div className="col-md-3 border border-3 rounded-3 bg-light bg-gradient m-1 py-1">
                    <img src={javascript} alt="javascript"  className="rounded mx-auto d-block"/>
                </div>
                <div className="col-md-3 border border-3 rounded-3 bg-light bg-gradient m-1 py-1">
                    <img src={html5} alt="html5" className="rounded mx-auto d-block"/>
                </div>
                <div className="col-md-3 border border-3 rounded-3 bg-light bg-gradient m-1 py-1">
                    <img src={nodejs} alt="nodejs" className="rounded mx-auto d-block"/>
                </div>
                <div className="col-md-3 border border-3 rounded-3 bg-light bg-gradient m-1 py-1">
                    <img src={bootstrap} alt="bootstrap" className="rounded mx-auto d-block"/>
                </div>
                <div className="col-md-3 border border-3 rounded-3 bg-light bg-gradient m-1 py-1">
                    <img src={css3} alt="css3" className="rounded mx-auto d-block"/>
                </div>
                <div className="col-md-3 border border-3 rounded-3 bg-light bg-gradient m-1 py-1">
                    <img src={php} alt="php" className="rounded mx-auto d-block"/>
                </div>
            </div>

        </div>
    </AbiliityConteiner>
)

export default Contacts