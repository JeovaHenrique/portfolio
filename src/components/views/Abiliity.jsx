import React from "react"
import reactnative from '../../assets/img/react-native.png'
import javascript from '../../assets/img/javascript.png'
import html5 from '../../assets/img/html-5.png'
import nodejs from '../../assets/img/nodejs.png'
import bootstrap from '../../assets/img/bootstrap.png'
import css3 from '../../assets/img/css3.png'
import php from '../../assets/img/php.png'

import { AbiliityConteiner, Bloc  } from "../styles/AbiliityStyle"

const Contacts = props => (
    <AbiliityConteiner className="row  bg-secondary bg-gradient">
        <div className="col-12 text-center mt-5 px-5 my-5">
            <h2>Habilidade</h2>
        </div>
        <div className="container col-10">
            <div className="row justify-content-md-center">
                <Bloc className="col-md-3 border border-3 rounded-3 bg-light bg-gradient ">
                    <img src={reactnative} alt="react/reactNative" className="rounded mx-auto d-block"/>
                </Bloc>
                <Bloc className="col-md-3 border border-3 rounded-3 bg-light bg-gradient ">
                    <img src={javascript} alt="javascript"  className="rounded mx-auto d-block"/>
                </Bloc>
                <Bloc className="col-md-3 border border-3 rounded-3 bg-light bg-gradient ">
                    <img src={html5} alt="html5" className="rounded mx-auto d-block"/>
                </Bloc>
                <Bloc className="col-md-3 border border-3 rounded-3 bg-light bg-gradient ">
                    <img src={nodejs} alt="nodejs" className="rounded mx-auto d-block"/>
                </Bloc>
                <Bloc className="col-md-3 border border-3 rounded-3 bg-light bg-gradient ">
                    <img src={bootstrap} alt="bootstrap" className="rounded mx-auto d-block"/>
                </Bloc>
                <Bloc className="col-md-3 border border-3 rounded-3 bg-light bg-gradient ">
                    <img src={css3} alt="css3" className="rounded mx-auto d-block"/>
                </Bloc>
                <Bloc className="col-md-3 border border-3 rounded-3 bg-light bg-gradient align-self-center px-5">
                    <img src={php} alt="php" className="rounded mx-auto d-block"/>
                </Bloc>
            </div>

        </div>
    </AbiliityConteiner>
)

export default Contacts