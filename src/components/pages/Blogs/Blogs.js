"use client";
import BlogGridView from '@/components/molecules/BlogGridView';
import blogConfig from '@/config/blog.config';
import { useEffect, useState } from 'react';
import labelsInfo from './label.config';
import { Button } from 'antd';
import Link from 'next/link';

export default function Blogs({ disableLink }) {

    useEffect(() => {
        setFilteredBlogs(blogConfig.filter((blog) => {
            const { category } = blog;
            return labels.includes(category);
        }));
    }, []);

    const [labels, setLabels] = useState([...labelsInfo]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    function onLabelClick(label) {
        let newLabels = labels;
        if (labels.includes(label)) {
            newLabels = newLabels.filter((item) => item !== label);
        } else {
            newLabels.push(label);
        }
        setLabels(newLabels);

        setFilteredBlogs(blogConfig.filter((blog) => {
            const { category } = blog;
            return newLabels.includes(category);
        }));
    }

    const renderedLabels = labelsInfo.map((item, idx) => {
        const type = (labels.includes(item)) ? "primary" : "default";
        const background = (labels.includes(item)) ? "!bg-green-600" : "";
        const emoji = (labels.includes(item)) ? "✅" : "";
        return <Button className={`mr-[60px] mb-[30px] ${background}`} type={type} key={`label_${idx}`} onClick={() => onLabelClick(item)}>{`${emoji} ${item}`}</Button>;
    });

    const renderedBlogs = filteredBlogs.map(({ title, subtitle, imagePath, category, date, path }, idx) => {
        return (<BlogGridView
            key={`blog_${idx}`}
            title={title}
            subtitle={subtitle}
            imagePath={imagePath}
            category={category}
            date={date}
            path={path}
        />);
    });

    const header = disableLink ? (<h1 className='cursor-default font-bold text-4xl mb-10'>Blogs</h1>) : <Link href={`/blogs`} passHref target="_blank"><h1 className='hover:text-sky-500 cursor-pointer font-bold text-4xl mb-10'>Blogs</h1></Link>;

    return <>
        {header}
        <div className='flex justify-center mb-[20px] sm:flex-row flex-col'>{renderedLabels}</div>
        <div className='flex justify-center mb-[50px]'>
            <div className="inline-grid xl:grid-cols-2 grid-cols-1 gap-[100px]">
                {renderedBlogs}
            </div>
        </div>
    </>;
}