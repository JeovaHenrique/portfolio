import React, {useEffect, useState} from "react"
import axios from 'axios'

import { Foto, ProjectsContainer, ListProjects } from "../styles/ProjectsStyles"

export default function Projects() {

    const[user, setUser] = useState([])
    const[projects, setProjects] = useState([])
    const[error, setError] = useState('')

    useEffect(() => {
        getApiGithub()
        getGitRepo()
    },[])

    function getApiGithub() {
        axios.get('https://api.github.com/users/JeovaHenrique', {

          })
          .then(function (response) {
            setUser(response.data)
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
            setError('Temporariamente fora do ar!!')
          })
    }

    function getGitRepo() {
        axios.get('https://api.github.com/users/JeovaHenrique/repos', {

          })
          .then(function (response) {
            setProjects(response.data)
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
            setError('Temporariamente fora do ar!!')
          })
    }

    

    return (
        <ProjectsContainer className="row">
                <div className="col-12 text-center mt-5 px-5">
                    <h2>Projetos</h2>
                </div>
                <Foto className="col-md-4 col-sm-12 mt-5">
                    <img src={user.avatar_url} alt="Foto GitHub"/>
                    <h3>{user.name}</h3>
                    <h4>{user.login}</h4>
                    <p>{user.bio}</p>
                </Foto>
                <ListProjects className="col-md-8 col-sm-11">
                    {
                        projects.slice(0,5).map((project) =>
                            <div key={project.id} className="m-2">
                                <a href={project.html_url} target='_blank' rel="noreferrer">
                                    <h3>{project.name}</h3>
                                </a>
                                <p>{project.description}</p>
                            </div>
                        )
                    }
                
                </ListProjects>
        </ProjectsContainer>
    )
}

