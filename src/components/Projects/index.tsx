import { Folder, GitFork, Star } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { RepoInterface } from '../../interfaces/Repo'
import { Card } from '../Card'
import './styles.css'

export function Projects() {
  const [repos, setRepos] = useState<RepoInterface[]>([])

  async function fetchProjects(){ 
    try{
      const response = await fetch('https://api.github.com/users/oppadayo')
    
      const user = await response.json()
  
      const reposResponse = await fetch(`${user.repos_url}?per_page=6`)  
     
      const repos = await reposResponse.json()

      setRepos(repos)
    }
    catch(erro){
      console.log(erro, 'Não foi possível carregar os repositorios')
    }
  }

  useEffect(() => {    
    fetchProjects()
  }, []) 

  return (
    <>
      <Card>
        <div className='projects-header'>
          <h4>My Projects</h4>
          <a href="https://github.com/oppadayo">Veja todos</a>
        </div>
      </Card>
      <div className='projects-container'>
      {repos.map(repo => (  
        <Card>
          <div className='header'>
            <Folder weight='bold' size={24} />
            <h5>{repo.name}</h5>
          </div>
          
          <p>{repo.description}</p>
          <footer>
            <div className='projects-row'>
              <div className='projects-row'>
                <Star weight='bold' size={24} />
                <small>{repo.stargazers_count}</small>                
              </div>
              <div className='projects-row'>
                <GitFork weight='bold' size={24} />
                <small>{repo.forks_count}</small>                
              </div>
              
            </div>

            <div className='projects-row'>
              <p>{repo.language}</p>
            </div>
         
            

          </footer>
          
        </Card>)
        )}
      </div>
    </>
  )
}


