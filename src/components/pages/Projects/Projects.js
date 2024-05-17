"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Projects() {
    useEffect(() => {
        const projectLink = {
            "data_scraping": "https://github.com/Himachallad/Image-Scrapper",
            "covid_tracking": "https://covid-tracker.tiiny.site",
            "blogging_website": "https://github.com/Himachallad/Pandita",
            "lending_case": "https://github.com/Himachallad/lending-club-casestudy",
            "face_detection": "https://github.com/Himachallad/face_detection",
            "telecom_churn": "https://github.com/Himachallad/telecom-churn-case-study"
        };

        const projectNames = {
            "data_scraping": {
                "name": "Google Image Scraping",
                "body": "Image Scrap is a tool made to work around Google Chrome's new rules on getting pictures from Google Images. It lets people easily get image data even though Chrome made it harder."
            },
            "covid_tracking": {
                "name": "World Covid Tracker",
                "body": "COVID Tracker is a ReactJS project crafted with the assistance of the COVID19 API. It serves as a straightforward tool for monitoring COVID-19 cases and fatalities worldwide. COVID-19, caused by the SARS-CoV-2 virus."
            },
            "blogging_website": {
                "name": "Blogging website",
                "body": "Pandita is a sleek React blogging website built with Material UI, offering a modern and user-friendly platform for sharing ideas and stories."
            },
            "lending_case": {
                "name": "Lending Case",
                "body": "Lending Case aims to discern patterns predicting loan default likelihood. By analyzing past loan applicants data, including default history, the project identifies indicators for risk assessment."
            },
            "face_detection": {
                "name": "Face detection",
                "body": "Face detection is a Python project utilizing OpenCV for real-time face detection. By leveraging OpenCV's robust features, the project accurately identifies and locates faces within images or video streams."
            },
            "telecom_churn": {
                "name": "Telecom Churn",
                "body": "This project focuses on analyzing customer data from a prominent telecom firm to predict and mitigate churn risks. By building predictive models, it implements measures to enhance retention rates."
            }
        };


        const projectList = Object.entries(projectNames).map((project, idx) => {
            const [project_key, project_name] = project;
            return (<div className='hover:scale-[1.01] flex cursor-pointer' key={`projects_${project_key}_${idx}`}>
                <a href={projectLink[project_key]} target="_blank" rel="noopener noreferrer" className="flex flex-col">
                    <Image className={`${project_key} brighten rounded-md md:block hidden`}
                        src={`/icons/projects/${project_key}.jpg`}
                        key={`${project_key}_${idx}`}
                        alt="project"
                        width={600}
                        height={600}
                        style={{ maxWidth: '600px', maxHeight: '600px' }}
                        priority
                    />
                    <div className='font-semibold text-lg max-w-[600px]'>{project_name?.name}</div>
                    <div className='font-light max-w-[600px] text-slate-500 line-clamp-3'>{project_name?.body}</div>

                </a>
            </div>);
        });
        setProjects(projectList);

    }, []);

    const [projects, setProjects] = useState([]);

    return <>
        <h1 className={`font-bold text-4xl mt-20 mb-10`}>Projects</h1>
        <div className='flex justify-center mb-[50px]'>
            <div className="inline-grid xl:grid-cols-2 gap-[100px]">
                {projects}
            </div>
        </div>
    </>;
}