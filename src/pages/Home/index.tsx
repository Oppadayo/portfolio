import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { Header } from '../../components/Header'
import { Posts } from '../../components/Posts'
import { Projects } from '../../components/Projects'
import { ShowCase } from '../../components/Showcase'
import { Skills } from '../../components/Skills'
import { SwitchTheme } from '../../contexts/ToggleTheme'
import { Footer } from '../../Footer'

import './styles.css'

export function Home() {

  const {theme, toggleTheme} = SwitchTheme()  

  return (    
   
      <div className='box' id={theme}>
        <div className='container'>
          <Header onClick={toggleTheme} theme={theme} />
          <main>
            <ShowCase />
            <About />
            <Skills />
            <Projects />
            <Posts />
            <Contact />
            <Footer />
          </main> 
        </div>
      </div>
    
  )
}


