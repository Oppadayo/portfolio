import './styles.css'

export function About(){
  return (
    <section className="about section" id='about'>
      <div className="container">
        <div className="about-grid">
        <div className="about-card">
          <i className="uil uil-mobile-android"></i>          
          <h3>Mobile</h3>
        </div>

        <div className="about-card">
          <i className="uil uil-window"></i>
          <h3>Web</h3>
        </div>

        <div className="about-card">
          <i className="uil uil-react"></i>
          <h3>React</h3>
        </div>

        <div className="about-card">
          <i className="uil uil-java-script"></i>
          <h3>Javascript/<br/>Typescript</h3>
        </div>
        </div>
        <div className="about-info">
          <h3 className='sub-heading'>Sobre mim</h3>
          <h1 className='heading'>Paula Correa</h1>
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