import { About } from '../../components/About'
import { Education } from '../../components/Education'
import { Posts } from '../../components/Posts'
import { Projects } from '../../components/Projects'
import { Social } from '../../components/Social'
import { Tech } from '../../components/Tech'
import { Xp } from '../../components/Xp'
import './styles.css'

export function Home() {
  return (
    <div className='container'>
      <div className='grid'>
        <div>
          <About />
          <Social />
          <Tech />
          <Xp />
          <Education />
        </div>

        <div>
        <Projects />
        <Posts />
        </div>
      </div>
      
    </div>
  )
}


