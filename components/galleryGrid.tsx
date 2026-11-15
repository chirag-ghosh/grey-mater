'use client'

import type { PhotoInfo } from '../lib/gallery'
import Image from 'next/image';
import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Loader } from 'react-feather';

type SortOrder = 'random' | 'newest' | 'oldest'

const sortOptions: { value: SortOrder, label: string }[] = [
    { value: 'random', label: 'Random' },
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' }
]

// Breakpoints mirror $screen-sm-max and $screen-xl-max in _variables.scss.
const getColumnCount = () => {
    if (window.innerWidth <= 576) return 1
    if (window.innerWidth <= 1449) return 2
    return 3
}

const subscribeToResize = (callback: () => void) => {
    window.addEventListener('resize', callback)
    return () => window.removeEventListener('resize', callback)
}

// Photos without a capture date always go last.
const sortPhotos = (photoInfos: PhotoInfo[], order: SortOrder) => {
    if (order === 'random') return photoInfos

    return [...photoInfos].sort((a, b) => {
        const aTime = a.exif?.takenAt
        const bTime = b.exif?.takenAt
        if (aTime === undefined && bTime === undefined) return 0
        if (aTime === undefined) return 1
        if (bTime === undefined) return -1
        return order === 'newest' ? bTime - aTime : aTime - bTime
    })
}

// Deals photos into columns, always adding to the shortest one, so the order
// reads across the page instead of down the first column.
const splitIntoColumns = (photoInfos: PhotoInfo[], columnCount: number) => {
    const columns: PhotoInfo[][] = Array.from({ length: columnCount }, () => [])
    const heights = new Array(columnCount).fill(0)

    photoInfos.forEach((photoInfo) => {
        const shortest = heights.indexOf(Math.min(...heights))
        columns[shortest].push(photoInfo)
        // Height relative to column width, plus a little for the caption.
        heights[shortest] += (photoInfo.width ? photoInfo.height / photoInfo.width : 1) + 0.1
    })

    return columns
}

const GalleryGrid = ({photoInfos}: {photoInfos: PhotoInfo[]}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [sortOrder, setSortOrder] = useState<SortOrder>('random')
    const columnCount = useSyncExternalStore(subscribeToResize, getColumnCount, () => 3)

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false)
        }

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }
        
        return () => {
            window.removeEventListener('load', handleLoad);
        }
    }, [])

    const columns = useMemo(
        () => splitIntoColumns(sortPhotos(photoInfos, sortOrder), columnCount),
        [photoInfos, sortOrder, columnCount]
    )

    return(
        <div className='gallery'>
            <h1>The beauties of the world</h1>
            {isLoading && <div className='loader'><Loader size={30} /><div className='text'>Hang on please. The gallery is loading.</div></div>}
            <div className={isLoading ? "sort loading" : "sort"} role='group' aria-label='Sort photos'>
                {sortOptions.map(({ value, label }) => (
                    <button
                        key={value}
                        type='button'
                        className={sortOrder === value ? 'active' : ''}
                        aria-pressed={sortOrder === value}
                        onClick={() => setSortOrder(value)}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className={isLoading ? "photo-grid loading" : "photo-grid"}>
                {columns.map((column, columnIndex) => (
                    <div className='column' key={columnIndex}>
                        {column.map((photoInfo) => (
                            <div className='item' key={photoInfo.filePath}>
                                <Image
                                    src={photoInfo.filePath}
                                    alt={photoInfo.filePath}
                                    width={photoInfo.width}
                                    height={photoInfo.height}
                                    blurDataURL={photoInfo.blurFilePath}
                                    placeholder='blur'
                                    loading='lazy'
                                />
                                {photoInfo.exif && (
                                    <div className='exif'>
                                        {[
                                            photoInfo.exif.camera,
                                            photoInfo.exif.focalLength,
                                            photoInfo.exif.aperture,
                                            photoInfo.exif.shutter,
                                            photoInfo.exif.iso
                                        ].filter(Boolean).map((value, i) => (
                                            <span key={i}>{value}</span>
                                        ))}
                                        {photoInfo.exif.date && <span className='date'>{photoInfo.exif.date}</span>}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryGrid
