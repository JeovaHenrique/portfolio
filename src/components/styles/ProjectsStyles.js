import styled from 'styled-components'
import bacProjects from '../../assets/img/projects.jpg'

export const ProjectsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    padding-bottom: 50px;
    background-image: url(${bacProjects});
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
        color: #05F5F9;
        text-shadow: 1px 1px white;
    }

    h3 {
        color: #05F5F9;
        text-shadow: 1px 1px;
    }

    h4 {
        color: #FFFFFF;
    }

    p {
        color: #FFFFFF;
    }


`
export const Foto = styled.div`
    border-radius: 50%;
    text-align: center;
    img {
        border-radius: 50%;
        width: 100%;
        max-width: 300px;
    }
`
export const ListProjects = styled.div`

    div {
        border-radius: 10px;
        background-color: #E5E7E9;
        padding: 0.5rem 1rem;
        text-shadow: 1px 1px;
        
        
        h3 {
            color: #154360;
            text-shadow: 1px 1px;
        }
    
        a {
            text-decoration: none;
        }

        p {
           color: #1B4F72;
        }
    }

`
