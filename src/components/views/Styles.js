import styled from 'styled-components'
import imgBac from'../../assets/img/computer.jpg'

export const HomeConteiner = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: start;
    background-image: url(${imgBac});
    background-position: center;
    background-size: cover;
    position: relative;
    &:after {
        content:'';
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-color:rgba(0,0,0,.6);    
        
    }

    div {
        z-index: 99;
    }

    h2 {
        text-transform: uppercase;
        font-size: 1.8em;
        color: #EEEEEE;
        margin-botton: 1rem;
    }

    h1 {
        text-transform: uppercase;
        font-size: 5em;
        color: #ffff1a;
        margin-botton: 1rem;
    }

    P {
        font-size: 1.8rem;
        color: #EEEEEE;
        margin-botton: 1rem;   
    }

    button {
        min=width: 150px;
        border: solid 1px #ffff1a;
        display: flex;
        align-items:center;
        color: #EEEEEE;
        background-color: transparent;
        border-radius: 42px;
        font-size: 1rem;
        padding: 10px 15px;
        margin: 0 auto;
        margin-top 2rem;
        transition-duration: 1s;
        cursor: pointer;
        &:hover {
            color: #ffff1a;
            boder: solid 1px #EEEEEE;
        }
    }
`;