"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const technologies = [
    { name: "AWS", icon: "aws" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "Java", icon: "java" },
    { name: "JavaScript", icon: "js" },
    { name: "Kubernetes", icon: "k8" },
    { name: "Pandas", icon: "pandas" },
    { name: "Python", icon: "python" },
    { name: "React", icon: "react" },
    { name: "Spring", icon: "spring" },
    { name: "TensorFlow", icon: "tensorflow" },
    { name: "Selenium", icon: "selenium" }
];

export default function KnownTechnologies() {
    return (
        <section className="container mx-auto px-4 py-20" id="technologies">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    Tech <span className="text-secondary">Stack</span>
                </motion.h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 justify-items-center">
                {technologies.map((tech, idx) => (
                    <motion.div
                        key={tech.icon}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center gap-4 group cursor-pointer"
                    >
                        <div className="relative w-20 h-20 md:w-24 md:h-24 p-4 glass rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-secondary/50 transition-colors duration-300">
                            <div className="relative w-full h-full">
                                <Image
                                    src={`/icons/languages/${tech.icon}.svg`}
                                    alt={tech.name}
                                    fill
                                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </div>
                        <span className="text-light-muted font-medium group-hover:text-white transition-colors">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}