import { GitHub, Instagram, Youtube } from "react-feather";
import { Biodata, Link } from "./types";

export const biodata: Biodata = {
    name: "Grey Mater",
    tagline: "A minimal portfolio website.",
    email: "cghosh828049@gmail.com"
}

export const links: Link[] = [
    {
        icon: GitHub,
        link: 'https://github.com/chirag-ghosh'
    },
    {
        icon: Youtube,
        link: 'https://github.com/chirag-ghosh'
    },
    {
        icon: Instagram,
        link: 'https://github.com/chirag-ghosh'
    }
]