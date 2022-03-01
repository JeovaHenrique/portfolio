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
        font-size: 1.5em;
        color: #EEEEEE;
        margin-botton: 1rem;
    }

    h1 {
        text-transform: uppercase;
        font-size: 5em;
        color: #05F5F9;
        margin-botton: 1rem;
    }

    P {
        font-size: 1.8rem;
        color: #EEEEEE;
        margin-botton: 1rem;   
    }

    img {
        width: 45px;
        heigth: 45px;
    }

    
`;