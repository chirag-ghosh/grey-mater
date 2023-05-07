import Link from "next/link";
import { Hash, Home, Image, Paperclip, PenTool } from "react-feather";
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter()

    return(
        <div className="navbar">
            <Link href='/' className={router.pathname === "/" ? "active" : ""}>
                <Home size={22} />
                <div className="label">Home</div>
            </Link>
            <Link href='/about' className={router.pathname === "/about" ? "active" : ""}>
                <Hash size={22} />
                <div className="label">About</div>
            </Link>
            <Link href='/blog' className={router.pathname === "/blog" ? "active" : ""}>
                <PenTool size={22} />
                <div className="label">Blog</div>
            </Link>
            <Link href='/gallery' className={router.pathname === "/gallery" ? "active" : ""}>
                <Image size={22} />
                <div className="label">Gallery</div>
            </Link>
            <Link href='/Resume.pdf'>
                <Paperclip size={22} />
                <div className="label">Resume</div>
            </Link>
        </div>
    )
}

export default Navbar;