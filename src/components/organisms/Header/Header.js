import Link from "next/link";

export default function Header() {
    return <>
        <div className="scroll-watcher"></div>
        {/* <nav className="flex gap-4 justify-end cursor-pointer backdrop-blur-md bg-opacity-10 bg-green-900 top-0 z-50 w-full">
            <Link className="p-6 cursor-pointer hover:underline text-black opacity-100 text-xl" href="/">Home</Link>
            <Link className="p-6 cursor-pointer hover:underline text-xl" href="/about-me">About Me</Link>
            <Link className="p-6 cursor-pointer hover:underline text-xl" href="portfolio">Portfolio</Link>
            <Link className="p-6 cursor-pointer hover:underline text-xl" href="blogs">Blogs</Link>
            <Link className="p-6 cursor-pointer hover:underline text-xl !mr-10" href="connect">Connect</Link>
        </nav> */}
    </>;
}