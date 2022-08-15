import { Briefcase, Browser, EnvelopeSimple, GithubLogo, LinkedinLogo, MapPin, TwitterLogo, WhatsappLogo } from 'phosphor-react'
import { Card } from '../Card'
import './styles.css'

export function Social() {
  const socials = [
    {id: 1, icon: <MapPin weight='bold' size={24}/>, title: 'Brasil', link: '' },
    {id: 2,icon: <Briefcase weight='bold' size={24}/>, title: 'Freelancer', link: '' },
    {id: 3,icon: <GithubLogo weight='bold' size={24}/>, title: 'Oppadayo', link: '' },
    {id: 4,icon: <LinkedinLogo weight='bold' size={24}/>, title: 'paula-correa', link: 'https://www.linkedin.com/in/paula-correa-a4b13020a/' },
    {id: 5,icon: <TwitterLogo weight='bold' size={24}/>, title: '@PaulaCorreaSil1', link: 'https://twitter.com/PaulaCorreaSil1' },
    {id: 6,icon: <Browser weight='bold' size={24}/>, title: 'https://astonishing-yeot-a871f7.netlify.app', link: 'https://astonishing-yeot-a871f7.netlify.app' },
    {id: 7,icon: <EnvelopeSimple weight='bold' size={24}/>, title: 'paula.correapcs@gmail.com', link: '' },
    {id: 8,icon: <WhatsappLogo weight='bold' size={24}/>, title: '(61) 9 9932-1368', link: '' },

  ]

  return (
    <Card>
      {socials.map(social =>  <div key={social.id} className='social'>
        {social.icon}
        <a href={social.link} target="_blank" rel="noreferrer">{social.title}</a>
        </div>)}
     
    </Card>
  )
}


