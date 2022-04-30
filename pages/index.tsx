import type { NextPage } from 'next'
import { biodata, links } from '../basicData'
import EmailPopup from '../components/emailPopup'

const Home: NextPage = () => {
  return (
    <div className='home'>
      <div className='title'>{biodata.name}</div>
      <div className='tagline'>{biodata.tagline}</div>
      <div className='link-list'>
        {links.map((link) => {
          return(
            <a href={link.link}>
              <link.icon size={30} />
            </a>
          )
        })}
      </div>
      <EmailPopup />
    </div>
  )
}

export default Home
