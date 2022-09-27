import { about } from '../../data'
import { AboutCard } from './AboutCard'
import './styles.css'

export function About(){
  return (
    <section className="about section" id='about'>
      <div className="container">
        <div className="about-grid">
       {about.map(ab => <AboutCard key={ab.id} title={ab.title} icon={ab.icon} />)}
        </div>
        <div className="about-info">
          <h3 className='sub-heading'>Sobre mim</h3>
          <h1 className='heading'>Paula Correa.</h1>
          <p className="text">
            Sou desenvolvedora front-end e mobile, 
            formada em análise e desenvolvimento de sistemas. 
            Tenho experiência no desenvolvimento de aplicações web e aplicações mobile, 
            desenvolvendo aplicações para as mais variadas áreas. Minhas principais habilidades estão relacionadas à criação de aplicações mobiles seguindo boas práticas de desenvolvimento.
          </p>

          <div className="cta">
            <a href="mailto:paula.correapcs@gmail.com" className="btn">Contato</a>
            <a href="../../assets/files/PaulaCorrea-CV.pdf" download className="btn secondary-btn">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}