import type { NextPage } from 'next'
import { getPhotoPaths } from '../../lib/gallery'

export async function getStaticProps() {
    const photoList = getPhotoPaths();
    return {
        props: {
            photoList
        }
    }
}
 
const Gallery: NextPage = ({photoList}: any) => {
    console.log(photoList.length)
    return(
        <div className='gallery'>
            <h1>The beauties of the world</h1>
            <div className='photo-grid'>
                {photoList.map((photoPath: string, index: number) => {
                    return(
                        <img
                            key={index}
                            src={photoPath}
                            alt={photoPath}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery