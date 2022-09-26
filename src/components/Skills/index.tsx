import './styles.css'

export function Skills(){
  return (
    <section className="skills section" >
      <div className="container">
        <div className="skills-box">
          <div className="box-heading">
            <h3 className="sub-heading">Minhas Habilidades</h3>
            <h1 className="heading">Posso te ajudar</h1>
            <div className="box-desc">
              <p className="text">Precisa de um site? Um app? Um desenvolvedor Front-end? Tenho connhecimento na stack React e muito mais!</p>
              <a href="" className="btn">Contato</a>
            </div>
          </div>
          <div className="skills-wrap">
              <div className="skill">
                <h2 className="skill-title">HTML</h2>
              </div>

              <div className="skill">
                <h2 className="skill-title">CSS</h2>
              </div>

              <div className="skill">
                <h2 className="skill-title">Javascript</h2>
              </div>

              <div className="skill">
                <h2 className="skill-title">Typescript</h2>
              </div>

              <div className="skill">
                <h2 className="skill-title">Git/GitHub</h2>
              </div>

              <div className="skill">
                <h2 className="skill-title">React</h2>
              </div>

              <div className="skill">
                <h2 className="skill-title">Node</h2>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}