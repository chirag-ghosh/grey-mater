import fs from "fs";
import path from "path";
import { imageSize } from 'image-size'
import exifr from 'exifr'

export type PhotoExif = {
    camera?: string,
    focalLength?: string,
    aperture?: string,
    shutter?: string,
    iso?: string,
    date?: string,
    takenAt?: number
}

export type PhotoInfo = {
    filePath: string,
    blurFilePath: string,
    width: number,
    height: number,
    exif: PhotoExif | null
}

// Raw EXIF model codes mapped to the names people actually use.
const cameraNames: Record<string, string> = {
    'ILCE-6400': 'Sony α6400',
    'ILCE-7M2': 'Sony α7 II',
    'NIKON D5600': 'Nikon D5600',
    'X-S10': 'Fujifilm X-S10',
    'X-T30': 'Fujifilm X-T30',
    'motorola edge 30': 'Motorola Edge 30'
}

const formatShutter = (seconds: number) => {
    if (seconds >= 1) return `${Number(seconds.toFixed(1))}s`
    return `1/${Math.round(1 / seconds)}s`
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// e.g. "Mar '23"
const formatDate = (date: Date) => {
    return `${monthNames[date.getMonth()]} '${String(date.getFullYear()).slice(-2)}`
}

// Only camera settings and the capture date are read; location and other tags are never picked.
async function getPhotoExif(file: Buffer): Promise<PhotoExif | null> {
    const raw = await exifr
        .parse(file, { pick: ['Model', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO', 'DateTimeOriginal'] })
        .catch(() => undefined)
    if (!raw) return null

    const exif: PhotoExif = {}
    if (raw.Model) exif.camera = cameraNames[raw.Model.trim()] ?? raw.Model.trim()
    if (raw.FocalLength) exif.focalLength = `${Math.round(raw.FocalLength)}mm`
    if (raw.FNumber) exif.aperture = `f/${Number(raw.FNumber.toFixed(1))}`
    if (raw.ExposureTime) exif.shutter = formatShutter(raw.ExposureTime)
    if (raw.ISO) exif.iso = `ISO ${raw.ISO}`
    if (raw.DateTimeOriginal instanceof Date) {
        exif.date = formatDate(raw.DateTimeOriginal)
        exif.takenAt = raw.DateTimeOriginal.getTime()
    }

    return Object.keys(exif).length > 0 ? exif : null
}

export async function getPhotoInfos() {

    const albumDirectory = path.join(process.cwd(), 'public/album/compressed');
    const fileNames = fs.readdirSync(albumDirectory);
    const fileInfos : PhotoInfo[] = await Promise.all(fileNames.map(async (fileName) => {
        const file = fs.readFileSync(path.join(albumDirectory, fileName))
        const dimension = imageSize(file)
        return {
            filePath: '/album/compressed/' + fileName,
            blurFilePath: '/album/blurred/' + fileName,
            width: dimension.width || 0,
            height: dimension.height || 0,
            exif: await getPhotoExif(file)
        }
    }))
    return fileInfos;
}
