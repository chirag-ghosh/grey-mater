import { GitHub, Instagram, Twitter } from "react-feather";
import { Biodata, Link } from "./types";

export const biodata: Biodata = {
    name: "Chirag Ghosh",
    tagline: "Student | Photographer | Coder",
    email: "cghosh828049@gmail.com"
}

export const links: Link[] = [
    {
        icon: GitHub,
        link: 'https://github.com/chirag-ghosh'
    },
    {
        icon: Twitter,
        link: 'https://twitter.com/SukoonFinder'
    },
    {
        icon: Instagram,
        link: 'https://www.instagram.com/unfocusedclicks'
    }
]