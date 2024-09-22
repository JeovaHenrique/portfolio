import styled from 'styled-components'

export const AboutConteiner = styled.div`
    height: 100%;
    display: flex;
    padding:  200px 5px 200px 5px;
    align-items:center;
    

    img {
        width: 40%;
        height: 40%;
        border-radius: 15%;
    }

    h2 {
        text-transform: uppercase;
        color: #05F5F9;
    }

    P {
        font-size: 1.3rem;
        color: #EEEEEE;
        margin-top: 3rem;   
    }

    text {
        color: #05F5F9;
    }

    button {
        min-width: 150px;
        border: solid 1px #05F5F9;
        display: flex;
        align-items:center;
        color: #EEEEEE;
        background-color: transparent;
        border-radius: 42px;
        font-size: 1rem;
        padding: 10px 15px;
        margin: 0 auto;
        margin-top: 2rem;
        transition-duration: 1s;
        cursor: pointer;
        &:hover {
            color: #05F5F9;
            border: solid 1px #EEEEEE;
        }
    }

    a {
        text-decoration: none;
    }

`
