import { GitHub, Instagram, Twitter } from "react-feather";
import { Biodata, Link } from "./types";

export const biodata: Biodata = {
    name: "Hello, I am Chirag Ghosh.",
    tagline: "A web developer. A photographer. A curious learner.",
    email: "cghosh828049@gmail.com"
}

export const links: Link[] = [
    {
        icon: GitHub,
        link: 'https://github.com/chirag-ghosh',
        name: 'Github'
    },
    {
        icon: Twitter,
        link: 'https://twitter.com/SukoonFinder',
        name: 'Twitter'
    },
    {
        icon: Instagram,
        link: 'https://www.instagram.com/unfocusedclicks',
        name: 'Instagram'
    }
]