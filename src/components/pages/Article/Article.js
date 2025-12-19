"use client";
import Markdown from "react-markdown";
import Image from 'next/image';
import { articles } from "./articleConfig";
import blogConfig from "@/config/blog.config";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Mermaid from "@/components/atoms/Mermaid/Mermaid";
import Link from "next/link";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { RocketOutlined, FireOutlined, CheckCircleOutlined } from '@ant-design/icons';

const markdownComponents = () => {
    return {
        p: ({ children }) => <p className="mb-6 text-lg text-light-200 leading-relaxed font-light">{children}</p>,
        h1: () => null, // Hide H1 as it is shown in Hero
        h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-5 flex items-center gap-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4 text-primary/90">{children}</h3>,
        ul: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2 text-light-200 marker:text-primary">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2 text-light-200 marker:text-secondary">{children}</ol>,
        li: ({ children }) => <li className="pl-2">{children}</li>,
        blockquote: ({ children }) => (
            <div className="bg-white/5 border-l-4 border-secondary p-4 my-6 rounded-r-lg italic text-light-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><FireOutlined className="text-4xl" /></div>
                {children}
            </div>
        ),
        code: ({ inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const isMermaid = match && match[1] === 'mermaid';

            if (!inline && isMermaid) {
                return (
                    <div className="flex justify-center my-8">
                        <Mermaid chart={String(children).replace(/\n$/, '')} />
                    </div>
                );
            }

            return !inline && match ? (
                <div className="relative group my-8 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-2 bg-dark-800 border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-xs text-white/40 font-mono uppercase">{match[1]}</span>
                    </div>
                    <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{ margin: 0, padding: '1.5rem', background: 'rgba(0,0,0,0.5)' }}
                        {...props}
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                </div>
            ) : (
                <code className="bg-white/10 text-primary px-2 py-1 rounded font-mono text-sm border border-white/5" {...props}>
                    {children}
                </code>
            );
        },
        img: ({ ...props }) => (
            <div className="my-8 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay" />
                <img {...props} className="w-full h-auto" alt={props.alt || "Blog Image"} />
            </div>
        ),
        a: ({ href, children }) => (
            <Link href={href} target="_blank" className="text-secondary hover:text-primary border-b border-secondary/30 hover:border-primary transition-colors pb-0.5">
                {children}
            </Link>
        ),
    };
};

export default function Articles({ blogId }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [questCompleted, setQuestCompleted] = useState(false);
    const blogMeta = blogConfig.find(b => b.path === blogId);
    const articleBody = articles[blogId]?.body || "# Content loading...";

    // Quest Completion Check
    useScroll({
        onChange: ({ value: { y } }) => {
            if (y > 0.95 && !questCompleted) {
                setQuestCompleted(true);
            }
        }
    });

    return (
        <article className="min-h-screen pb-32">
            {/* XP Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary origin-left z-50 shadow-[0_0_20px_rgba(255,217,61,0.5)]"
                style={{ scaleX }}
            />

            {/* Immersive Hero */}
            <div className="relative h-[60vh] w-full flex items-center overflow-hidden mb-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={blogMeta?.imagePath || '/icons/blogs/learn_ai.jpg'}
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-30 blur-sm scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/80 to-dark-900" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-mono text-secondary mb-6 pointer-events-none"
                    >
                        MISSION: {blogMeta?.category || 'TECH'}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 mb-6 tracking-tight"
                    >
                        {blogMeta?.title || "Blog Title"}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-light-muted max-w-2xl font-light leading-relaxed"
                    >
                        {blogMeta?.subtitle}
                    </motion.p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                <div className="prose prose-invert max-w-none">
                    <Markdown
                        components={markdownComponents()}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                    >
                        {articleBody}
                    </Markdown>
                </div>
            </div>

            {/* Quest Complete Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-32 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-dark-800 to-dark-900 border border-white/5 text-center relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 text-primary mb-6 shadow-[0_0_30px_rgba(255,217,61,0.3)]">
                        <RocketOutlined className="text-4xl" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">QUEST COMPLETE!</h3>
                    <p className="text-light-muted mb-8">You&apos;ve gained <span className="text-primary font-bold">+100 EXP</span> in {blogMeta?.category}</p>

                    <a href="/#blogs" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-dark-900 font-bold hover:scale-105 transition-transform">
                        <CheckCircleOutlined /> Claim Reward & Return
                    </a>
                </div>
            </motion.div>
        </article>
    );
}