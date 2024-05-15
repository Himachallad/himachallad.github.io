"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function KnownTechnologies() {


    useEffect(() => {
        const logosSources = ["aws", "docker", "git", "java", "js", "k8", "pandas", "python", "react", "spring", "tensorflow", "selenium"];

        const knownTechnologies = logosSources.map((tech) => {
            return (<Image className={tech}
                src={`/icons/languages/${tech}.svg`}
                key={tech}
                alt="js-logo"
                width={100}
                height={50}
            />);
        });
        setKnownLangs(knownTechnologies);
    }, []);
    const [knownLangs, setKnownLangs] = useState([]);

    return <>
        <h1 className='font-bold text-4xl mt-20'>Technology</h1>
        <div className="tech-animate mt-10 grid lg:grid-rows-2 grid-rows-1 lg:grid-flow-col xl:gap-x-40 md:gap-x-10 gap-y-10 justify-center items-center bg-slate-100">
            {knownLangs}
        </div>

    </>;
}