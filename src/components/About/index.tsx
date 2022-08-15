import { useEffect, useState } from 'react'
import { UserInterface } from '../../interfaces/User'
import { Card } from '../Card'
import './styles.css'

export function About() {
  const [user, setUser] = useState<UserInterface>()

  async function fetchProjects(){ 
    try{
      const response = await fetch('https://api.github.com/users/oppadayo')
    
      const data = await response.json()

      setUser(data)
    }
    catch(erro){
      console.log(erro, 'Não foi possível carregar as informações de usuário')
    }
  }

  useEffect(() => {    
    fetchProjects()
  }, []) 

  return (
    <Card>
       {user && 
     ( <div className='about-container'>       
         <img src={user?.avatar_url} />
          <h1>{user?.name}</h1>
          <p>Mobile Developer React Native</p>
      </div>)
       }
    </Card>         

  )
}


