import { Card } from '../Card'
import './styles.css'


export function Xp() {

  const xps =[
    {id: 1, title: 'Softable', date: '2021 - 2022', description: 'Desenvolvedora Front-end Júnior'},
    {id: 2, title: 'Easy Dental', date: '2021 - 2021', description: 'Desenvolvedora Front-end Júnior'},
    {id: 3, title: 'TRF1', date: '2019 - 2020', description: 'Estagiaria em Infra'}
  ]

  return (
    <Card>
      <div className='xp-container'>
        <h4>Experiências</h4>

        <ul>
          {xps.map(xp => (
            <li key={xp.id}>
              <div className='xp-data'>
                <p>{xp.title}</p>
                <small>{xp.date}</small>
                <small>{xp.description}</small>
              </div>
            </li>))}
        </ul>
      </div>
    </Card>
  )
}


