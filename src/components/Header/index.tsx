import { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";


import './styles.css'

interface HeaderProps{
  onClick: () => void
  theme: string
}

export function Header({onClick, theme}: HeaderProps) {

  const [sticky, setSticky] = useState(false)

  function stickyNavbar(){
    window.scrollY > 0 ? setSticky(true) : setSticky(false)
  }

  window.addEventListener('scroll', stickyNavbar)
  
  return (
    <header className={sticky ? 'scrolled' : ''}>
     <nav className='container'>
      <a className='logo' href="">Portf<span>olio.</span></a>
      <div className='links'>
        <ul>
          <li>
            <Link 
              to="home" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500} 
              className="nav-link" 
            >Home</Link>
          </li>
          <li>
          <Link 
              to="about" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500} 
              className="nav-link" 
            >Sobre</Link>
            
          </li>
          <li>
          <Link 
              to="skills"
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500} 
              className="nav-link" 
            >Habilidades</Link>
            
          </li>
          <li>
          <Link 
              to="projects" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500} 
              className="nav-link" 
            >Projetos</Link>
           
          </li>
          <li>
          <Link 
              to="posts" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500} 
              className="nav-link" 
            >Posts</Link>
           
          </li>
          <li>
          <Link 
              to="contact" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500} 
              className="nav-link" 
            >Contato</Link>
            
          </li>

        </ul>
        <i className={`uil ${theme ==='dark' ? 'uil-sun' : 'uil-moon'} toggle-btn`} onClick={onClick}></i>
      </div>
     </nav>
      
    </header>
  )
}
