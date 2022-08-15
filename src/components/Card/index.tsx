import { ReactNode } from 'react'
import './styles.css'

interface CardProps{
  children: ReactNode
}

export function Card({children}: CardProps) {

  return (
    <div className='card-container'>
      {children}
    </div>
  )
}


