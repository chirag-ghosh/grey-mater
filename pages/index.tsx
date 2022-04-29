import type { NextPage } from 'next'
import { biodata, links } from '../basicData'

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
    </div>
  )
}

export default Home
