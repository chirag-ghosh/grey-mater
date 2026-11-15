import { getPhotoInfos } from '../../lib/gallery'
import shuffle from '../../lib/shuffle'
import GalleryGrid from '../../components/galleryGrid'

export default function Gallery() {
    const photoInfos = shuffle(getPhotoInfos())
    return <GalleryGrid photoInfos={photoInfos} />
}
