import { skills } from '../../data'
import { SkillCard } from './SkillCard'
import './styles.css'

export function Skills(){
  return (
    <section className="skills section" >
      <div className="container">
        <div className="skills-box">
          <div className="box-heading">
            <h3 className="sub-heading">Minhas Habilidades</h3>
            <h1 className="heading">O que sei fazer.</h1>
            <div className="box-desc">
              <p className="text">Precisa de um site? Um app? Um desenvolvedor Front-end? Tenho connhecimento na stack React e muito mais!</p>
              <a href="" className="btn">Contato</a>
            </div>
          </div>
          <div className="skills-wrap">
            {skills.map(skill => <SkillCard key={skill.id} title={skill.title} />)}             
          </div>
        </div>
      </div>
    </section>
  )
}