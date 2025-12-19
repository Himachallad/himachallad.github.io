'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GithubOutlined, LinkedinOutlined, RocketOutlined } from '@ant-design/icons';

const BentoItem = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }} // smooth easeOutQuint
        className={`relative overflow-hidden rounded-3xl glass border border-white/5 p-6 hover:border-white/20 transition-colors duration-500 group ${className}`}
    >
        {children}
    </motion.div>
);

export default function Introduction() {
    return (
        <section className="min-h-screen pt-4 pb-20 relative z-10 flex flex-col justify-start">

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-[minmax(180px,auto)]">

                {/* 1. Profile Photo - Branding Core */}
                <BentoItem className="col-span-1 md:col-span-1 row-span-2 relative min-h-[400px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10 opacity-60" />
                    <Image
                        src="/icons/crop_image.jpg"
                        alt="Himachal Pathania"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                        <h2 className="text-3xl font-bold text-white leading-tight">Himachal<br />Pathania</h2>
                    </div>
                </BentoItem>

                {/* 2. Main Title - Tech Lead */}
                <BentoItem className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden" delay={0.1}>
                    <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 z-10">
                        TECH<br />LEAD
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-light-muted max-w-2xl font-light">
                        Building scalable <span className="text-primary font-semibold">AI & Search systems</span> and leading high-performance engineering teams.
                    </p>
                    <div className="absolute bottom-4 right-4 text-white/10 text-9xl font-black -rotate-12 select-none pointer-events-none">
                        2025
                    </div>
                </BentoItem>

                {/* 3. Tech Stack - Infinite Marquee */}
                <BentoItem className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between group" delay={0.2}>
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-white">Tech Arsenal</h3>
                        <RocketOutlined className="text-2xl text-secondary" />
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        {['Python', 'AI', 'Search', 'Milvus', 'Java', 'Spring Boot', 'Kafka', 'AWS', 'System Design'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-sm text-light-100 border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </BentoItem>

                {/* 4. Statistics / Context */}
                <BentoItem className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-center items-center text-center bg-white/5 border-primary/20" delay={0.3}>
                    <h4 className="text-6xl font-black mb-2 text-primary">8+</h4>
                    <p className="font-bold uppercase tracking-widest text-sm text-white">Years Exp</p>
                </BentoItem>

                {/* 5. Social / Connect */}
                <BentoItem className="col-span-1 flex flex-col justify-center gap-4 text-center group" delay={0.4}>
                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/Himachallad" target="_blank" className="text-4xl text-light-muted hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <GithubOutlined />
                        </a>
                        <a href="https://www.linkedin.com/in/himachallad/" target="_blank" className="text-4xl text-light-muted hover:text-[#0077b5] transition-colors hover:scale-110 transform duration-200">
                            <LinkedinOutlined />
                        </a>
                    </div>
                    <p className="text-sm text-light-muted mt-2">Let&apos;s build something epic</p>
                    <a href="mailto:himachallad@gmail.com" className="mt-2 text-primary text-sm font-bold hover:underline">
                        himachallad@gmail.com
                    </a>
                </BentoItem>

            </div>

            {/* Background Decoration */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>
        </section>
    );
}
