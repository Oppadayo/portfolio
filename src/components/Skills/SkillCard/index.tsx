import './styles.css'

interface Props{
title: string
}

export function SkillCard({title}: Props){
  return (   
    <div className="skill">
      <h2 className="skill-title">{title}</h2>
     </div>            
  )
}