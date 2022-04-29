import { NextComponentType } from "next"
import Link from "next/link"

const Header: NextComponentType = () => {

    return(
        <div className="header">
            <div className="title">
                Grey Mater
            </div>
            <div className="option-list">
                <Link href="/">
                    <div className="option">Home</div>
                </Link>
                <Link href="/">
                    <div className="option">Blogs</div>
                </Link>
                <Link href="/">
                    <div className="option">Gallery</div>
                </Link>
            </div>
        </div>
    )
}

export default Header