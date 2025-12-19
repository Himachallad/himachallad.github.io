import Image from 'next/image';
import Link from 'next/link';
import { CalendarOutlined, FolderOpenOutlined } from '@ant-design/icons';

export default function BlogGridView({ imagePath, title, subtitle, category, date, path }) {
    return (
        <Link href={`/blogs/${path}`} passHref target="_blank" className="block group h-full">
            <div className="glass h-full rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-dark-900/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
                    <Image
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        src={imagePath}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-secondary font-medium mb-3">
                        <div className="flex items-center gap-1">
                            <FolderOpenOutlined />
                            <span>{category}</span>
                        </div>
                        <div className="flex items-center gap-1 text-light-muted">
                            <CalendarOutlined />
                            <span>{date}</span>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
                    <p className="text-light-muted text-sm line-clamp-3 mb-4 flex-grow">{subtitle}</p>

                    <span className="text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform inline-block mt-auto">
                        Read Article &rarr;
                    </span>
                </div>
            </div>
        </Link>
    );
}