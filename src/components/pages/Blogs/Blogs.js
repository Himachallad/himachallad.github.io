import BlogGridView from '@/components/molecules/BlogGridView';
import Link from 'next/link';
import blogConfig from '@/config/blog-config';
import RecommendedBlogs from '@/components/organisms/RecommendedBlogs';

export default function Blogs() {
    const { recommended } = blogConfig;
    return <>
        <h1 className='font-bold text-4xl mt-20 mb-5'>Blogs</h1>
        <RecommendedBlogs blogs={recommended} />
        <div>Blog 1</div>
        <div>Blog 2</div>

        <div>Topic chooser label</div>
        Blogs
        <div>Blog 3</div>
        <div>Blog 4</div>
        <div>Blog 5</div>
        <div>Blog 6</div>
    </>;
}