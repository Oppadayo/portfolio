import { Briefcase, Browser, EnvelopeSimple, GithubLogo, LinkedinLogo, MapPin, TwitterLogo } from 'phosphor-react'
import { Card } from '../Card'
import './styles.css'

export function Social() {
  const socials = [
    {icon: <MapPin weight='bold' size={24}/>, title: 'Brasil', link: '' },
    {icon: <Briefcase weight='bold' size={24}/>, title: 'Freelancer', link: '' },
    {icon: <GithubLogo weight='bold' size={24}/>, title: 'Oppadayo', link: '' },
    {icon: <LinkedinLogo weight='bold' size={24}/>, title: 'paula-correa', link: 'https://www.linkedin.com/in/paula-correa-a4b13020a/' },
    {icon: <TwitterLogo weight='bold' size={24}/>, title: '@PaulaCorreaSil1', link: 'https://twitter.com/PaulaCorreaSil1' },
    {icon: <Browser weight='bold' size={24}/>, title: 'Oppadayo', link: '' },
    {icon: <EnvelopeSimple weight='bold' size={24}/>, title: 'paula.correapcs@gmail.com', link: '' },
  ]

  return (
    <Card>
      {socials.map(social =>  <div key={social.title} className='social'>
        {social.icon}
        <a href={social.link}>{social.title}</a>
        </div>)}
     
    </Card>
  )
}


