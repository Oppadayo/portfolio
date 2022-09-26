import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Posts } from '../../components/Posts'
import { Projects } from '../../components/Projects'
import { Sheet } from '../../components/Sheet'
import { ShowCase } from '../../components/Showcase'
import { Skills } from '../../components/Skills'
import { SwitchTheme } from '../../contexts/ToggleTheme'


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


