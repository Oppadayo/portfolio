import './styles.css'

interface Props {
  title: string
  icon: string
}

export function AboutCard({ title, icon}: Props){
  return (    
    <div className="about-card">
      <i className={`uil uil-${icon}`}></i>
      <h3>{title}</h3>
    </div>       
  )
}