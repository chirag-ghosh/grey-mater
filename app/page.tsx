import { biodata } from '../basicData'

export default function Home() {
  return (
    <div className='home'>
      <div className='title'>{biodata.name}</div>
      <div className='tagline'>{biodata.tagline}</div>
    </div>
  )
}
