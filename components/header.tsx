import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import { links } from "../basicData"

const Header = () => {

    return(
        <div className="header">
            <Link href="/">
                <Image src="/logo.jpeg" alt="logo" width={64} height={64} priority />
            </Link>
            <div className='link-list'>
                {links.map((link, index) => {
                return(
                    <Fragment key={index}>
                        <a href={link.link}>
                            <p>{link.name}</p>
                            <link.icon size={22} />
                        </a>
                        {index != (links.length-1) && <div>/</div>}
                    </Fragment>
                )
                })}
            </div>
        </div>
    )
}

export default Header