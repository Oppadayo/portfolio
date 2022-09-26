import ScrollReveal from 'scrollreveal'

import './styles.css'

export function ShowCase(){

let scrollReveal = ScrollReveal({
  duration: 2500,
  distance: '60px',
}) 

scrollReveal.reveal('showcase-area', {delay: 600})

  return (
   
      <section className="showcase-area" id='home'>
        <div className='container'>
          <h3 className='sub-heading'>Desenvolvedora Front-end e mobile</h3>
          <h1 className='heading'>Paula Correa</h1>
          <ul className="social-media">
            <li>
              <a href="https://github.com/Oppadayo" className='social-link'>
                <i className="uil uil-github-alt"></i>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/PaulaCorreaSil1" className='social-link'>
              <i className="uil uil-twitter-alt"></i>
              </a>
            </li>
            <li>
              <a href="#" className='social-link'>
              <i className="uil uil-globe"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC8wNat6aGfyfr6FM_iUxPTw" className='social-link'>
                <i className="uil uil-youtube"></i>
              </a>
            </li>
          </ul>
          
          <div className="cta">
            <a href="mailto:paula.correapcs@gmail.com" className="btn">Contato</a>
            <a href="../../assets/files/PaulaCorrea-CV.pdf" download className="btn secondary-btn">Download CV</a>
          </div>
        </div>
      </section>
    
  )
}