import Link from "next/link";
import Image from 'next/image';
export default function Blogs() {
    return <main className="flex min-h-screen flex-col items-center justify-center p-24">

        <Link href="/"><Image
            className="rounded-xl"
            src={`/icons/coming_soon.svg`}
            key={"blogs_coming_soon"}
            alt="coming_soon-logo"
            width={500}
            height={500}
        ></Image></Link>
    </main>;
}