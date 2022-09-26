import './styles.css';

export function Footer(){
  return(
    <footer>
      <div className="container">
        <a className='logo' href="">Portf<span>olio.</span></a>
        <p className="text">&copy; Copyright 2022. All rights reserved</p>
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
      </div>
    </footer>
  )
}