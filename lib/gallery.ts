import fs from "fs";
import path from "path";

export function getPhotoPaths() {

    const albumDirectory = path.join(process.cwd(), 'public/album');
    const fileNames = fs.readdirSync(albumDirectory);
    const filePaths = fileNames.map((fileName) => 'album/' + fileName);
    return filePaths;
}