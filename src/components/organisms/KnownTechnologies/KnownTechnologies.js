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
        <div class="grid grid-rows-2 grid-flow-col gap-x-40 justify-center items-center">
            {knownLangs}
        </div>

    </>;
}