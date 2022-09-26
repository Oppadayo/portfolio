import { useEffect, useState } from 'react'
import { RepoInterface } from '../../interfaces/Repo'
import './styles.css'

export function Projects(){

  const [repos, setRepos] = useState<RepoInterface[]>([])

  async function fetchProjects(){ 
    try{
      const response = await fetch('https://api.github.com/users/oppadayo')
    
      const user = await response.json()
  
      const reposResponse = await fetch(`${user.repos_url}?per_page=9&sort=created`)  
     
      const repos = await reposResponse.json()

      setRepos(repos)
    }
    catch(erro){
      console.log(erro, 'Não foi possível carregar os repositorios')
    }
  }

  console.log(repos.map(repo => repo))

  useEffect(() => {    
    fetchProjects()
  }, []) 


  return (
    <section className="projects section" id='projects'>
      <div className="container">
        <div className="project-header">
          <div className="project-title">
            <h3 className="sub-heading">Projetos</h3>
            <h1 className="heading">O que faço.</h1>
            <p className="text">Um pouco do que faço e estudo. Dá uma olhada!</p>
          </div>
         
        </div>

      

        <div className="project-gallery">
          {repos.map(repo => <div className="project-card">
           
            <div className="project-desc">
              <h3>{repo.name}</h3>
              <p className="text">{repo.description}</p>
              
             
            </div>
            <a href={repo.html_url} className="btn secondary-btn sm">Detalhes</a>
          </div>)}          
        </div>
      </div>
    </section>
  )
}