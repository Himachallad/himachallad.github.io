import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-dark-900 text-center relative z-10">
            <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center gap-6">
                <div className="flex gap-6">
                    <a href="https://www.linkedin.com/in/himachallad/" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 rounded-full hover:bg-secondary/20 transition-all duration-300">
                        <Image className="filter invert group-hover:invert-0 opacity-70 group-hover:opacity-100 transition-all"
                            src={`/icons/social/linkedin.svg`}
                            alt="linkedin-logo"
                            width={24}
                            height={24}
                        />
                    </a>
                    <a href="https://github.com/Himachallad" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 rounded-full hover:bg-secondary/20 transition-all duration-300">
                        <Image className="filter invert group-hover:invert-0 opacity-70 group-hover:opacity-100 transition-all"
                            src={`/icons/social/github.svg`}
                            alt="github-logo"
                            width={24}
                            height={24}
                        />
                    </a>
                </div>

                <p className="text-light-muted text-sm">
                    © {currentYear} <span className="text-white font-semibold">Nikhil Pathania</span>. All rights reserved.
                </p>
                <p className="text-xs text-light-muted/50">
                    Built with Next.js, Tailwind CSS & Framer Motion
                </p>
            </div>
        </footer>
    );
}