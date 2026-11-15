import { getPhotoInfos } from '../../lib/gallery'
import shuffle from '../../lib/shuffle'
import GalleryGrid from '../../components/galleryGrid'

export default async function Gallery() {
    const photoInfos = shuffle(await getPhotoInfos())
    return <GalleryGrid photoInfos={photoInfos} />
}
