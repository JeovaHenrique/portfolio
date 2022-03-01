import styled from 'styled-components'

export const AboutConteiner = styled.div`
    height: 100vh;
    display: flex;
    

    img {
        width: 40%;
        heigth: 40%;
        border-radius: 15%;
    }

    h2 {
        text-transform: uppercase;
        font-size: 3em;
        color: #05F5F9;
    }

    P {
        font-size: 1.6rem;
        color: #EEEEEE;
        margin-top: 3rem;   
    }

    text {
        color: #05F5F9;
    }

    button {
        min=width: 150px;
        border: solid 1px #05F5F9;
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
            color: #05F5F9;
            boder: solid 1px #EEEEEE;
        }
    }

`
