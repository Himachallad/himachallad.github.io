"use client";
import BlogGridView from '@/components/molecules/BlogGridView';
import blogConfig from '@/config/blog.config';
import { useEffect, useState } from 'react';
import labelsInfo from './label.config';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { InView } from 'react-intersection-observer';

export default function Blogs({ disableLink }) {
    const [labels, setLabels] = useState([...labelsInfo]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {
        setFilteredBlogs(blogConfig.filter((blog) => {
            const { category } = blog;
            return labels.includes(category);
        }));
    }, [labels]);

    function onLabelClick(label) {
        let newLabels = [...labels];
        if (labels.includes(label)) {
            newLabels = newLabels.filter((item) => item !== label);
        } else {
            newLabels.push(label);
        }
        setLabels(newLabels);
    }

    return (
        <section className="pt-0 pb-32 relative" id="blogs">
            <div className="text-center mb-24">
                {disableLink ? (
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest <span className="text-secondary">Blogs</span></h2>
                ) : (
                    <Link href="/blogs" target="_blank">
                        <motion.h2
                            whileHover={{ scale: 1.05 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6 cursor-pointer inline-block"
                        >
                            Latest <span className="text-secondary">Blogs</span>
                        </motion.h2>
                    </Link>
                )}
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {labelsInfo.map((item, idx) => {
                    const isActive = labels.includes(item);
                    return (
                        <button
                            key={item}
                            onClick={() => onLabelClick(item)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-sm ${isActive
                                ? 'bg-secondary text-dark-900 border-secondary shadow-[0_0_15px_-3px_rgba(107,203,119,0.4)]'
                                : 'bg-white/5 text-light-muted border-white/10 hover:border-secondary hover:text-secondary'
                                }`}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredBlogs.map((blog, idx) => (
                        <motion.div
                            layout
                            key={blog.path}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <BlogGridView {...blog} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}