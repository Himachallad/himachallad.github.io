import Image from 'next/image';
export default function BlogGridView({ imagePath, title, subtitle, category, date }) {
    return (
        <div className='flex flex-col'>
            <div>
                <Image
                    src={imagePath}
                    width={300}
                    height={300}
                    alt='abc'
                />
                <div className='font-semibold text-lg'>{title}</div>
                <div className='font-light text-slate-500'>{subtitle}</div>
                <div className='flex flex-row'>
                    <div>{category}</div>
                    <div>{date}</div>
                </div>
            </div>
        </div>
    );
}