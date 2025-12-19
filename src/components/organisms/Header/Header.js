"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 20);
    });

    const links = [
        { name: "Home", href: "/" },
        { name: "Tech", href: "#technologies" },
        { name: "Projects", href: "#projects" },
        { name: "Blogs", href: "#blogs" },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -20, opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
            <nav className={`pointer-events-auto px-6 py-3 rounded-full flex items-center gap-8 transition-all duration-300 ${scrolled ? 'glass shadow-2xl shadow-primary/5 border border-white/10' : 'bg-transparent'}`}>
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    <span className="text-white">HIMA</span>
                    <span className="text-secondary">CHALLAD</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-light-muted hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                <a
                    href="https://www.linkedin.com/in/himachallad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-white/10 hover:bg-primary hover:text-dark-900 text-white border border-white/5 transition-all font-semibold text-xs tracking-wide uppercase"
                >
                    Connect
                </a>
            </nav>
        </motion.header>
    );
}