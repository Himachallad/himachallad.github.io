import Image from 'next/image';
import Link from 'next/link';

export default function BlogGridView({ imagePath, title, subtitle, category, date, path }) {
    return (
        <div className='flex flex-col'>
            <Link href={`/blogs/${path}`} passHref target="_blank">
                <Image className={`rounded-md md:block hidden brighten`}
                    src={imagePath}
                    alt="blog"
                    width={600}
                    height={600}
                    style={{ maxWidth: '600px', maxHeight: '600px' }}
                    priority
                />
                <div className='text-white text-lg max-w-[500px] mx-auto font-semibold'>{title}</div>
                <div className='text-white font-ligh'>{subtitle}</div>
                <div className='text-white flex flex-row justify-between'>
                    <div>{category}</div>
                    <div>{date}</div>
                </div>
            </Link>
        </div>
    );
}