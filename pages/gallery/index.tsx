import { PhotoInfo, getPhotoInfos } from '../../lib/gallery'
import Image from 'next/image';
import shuffle from '../../lib/shuffle';

export async function getStaticProps() {
    let photoInfos = getPhotoInfos();
    photoInfos = shuffle(photoInfos)
    return {
        props: {
            photoInfos
        }
    }
}
 
const Gallery = ({photoInfos}: {photoInfos: PhotoInfo[]}) => {
    return(
        <div className='gallery'>
            <h1>The beauties of the world</h1>
            <div className='photo-grid'>
                {photoInfos.map((photoInfo, index: number) => {
                    return(
                        <div className='item' key={index}>
                            <Image
                                key={index}
                                src={photoInfo.filePath}
                                alt={photoInfo.filePath}
                                width={photoInfo.width}
                                height={photoInfo.height}
                                blurDataURL={photoInfo.blurFilePath}
                                placeholder='blur'
                                loading='lazy'
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery