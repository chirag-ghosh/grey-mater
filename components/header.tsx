import { NextComponentType } from "next"
import Link from "next/link"
import { biodata } from "../basicData"

const Header: NextComponentType = () => {

    return(
        <div className="header">
            <div className="title">
                {biodata.name}
            </div>
            <div className="option-list">
                <Link href="/">
                    <div className="option">Home</div>
                </Link>
                <Link href="/blogs">
                    <div className="option">Blogs</div>
                </Link>
                <Link href="/gallery">
                    <div className="option">Gallery</div>
                </Link>
            </div>
        </div>
    )
}

export default Header