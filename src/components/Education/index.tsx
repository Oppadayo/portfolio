import { Card } from '../Card'
import './styles.css'


export function Education() {

  const education =[
    {id: 1, title: 'Analise e desenvolvimento de sistemas', date: '2017- 2020', description: 'UniCEUB'},
    {id: 2, title: 'Técnico em informatica', date: '2016 - 2018', description: 'ETB'},
    {id: 3, title: 'Computação gráfica', date: '2013 - 2015', description: 'Unip'}
  ]

  return (
    <Card>
      <div className='xp-container'>
        <h4>Educação</h4>

        <ul>
          {education.map(edu => (
            <li key={edu.id}>
              <div className='xp-data'>
                <p>{edu.title}</p>
                <small>{edu.date}</small>
                <small>{edu.description}</small>
              </div>
            </li>))}
        </ul>
      </div>
    </Card>
  )
}


