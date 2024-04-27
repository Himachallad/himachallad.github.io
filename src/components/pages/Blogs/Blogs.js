import Link from 'next/link';

export default function Blogs() {
    return <>
        <h1 className='font-bold text-4xl mt-20 mb-5'>Blogs</h1>
        <Link href="/blogs">Check latest updates</Link>
    </>;
}