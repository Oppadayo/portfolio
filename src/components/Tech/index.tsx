import { Card } from '../Card'
import './styles.css'

export function Tech() {

  const techs = [
    {id: 1, name: 'HTML'},
    {id: 2, name: 'CSS'},
    {id: 3, name: 'javascript'},
    {id: 4, name: 'ReactJS'},
    {id: 5, name: 'React Native'},
    {id: 6, name: 'Git'},
    {id: 7, name: 'Github'},   
    {id: 8, name: 'Typescript'},
    
  ]

  return (
    <Card>
      <h4>Tecnologias</h4>
      <div className='tech-container'>
        {techs.map(tech =>  <div key={tech.id} className='pill'>
          {tech.name.toLocaleUpperCase()}
        </div>)}
        
      </div>

    </Card>
     
  )
}


