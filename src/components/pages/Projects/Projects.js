"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Projects() {
    useEffect(() => {
        const projectLink = {
            "data_scraping": "https://github.com/Himachallad/Image-Scrapper",
            "covid_tracking": "https://github.com/Himachallad/covid_tracker",
            "blogging_website": "https://github.com/Himachallad/Pandita",
            "lending_case": "https://github.com/Himachallad/lending-club-casestudy",
            "face_detection": "https://github.com/Himachallad/face_detection",
            "telecom_churn": "https://github.com/Himachallad/telecom-churn-case-study"
        };

        const projectNames = {
            "data_scraping": {
                "name": "Data Scraping",
                "body": "Image Scrap is a tool made to work around Google Chrome's new rules on getting pictures from Google Images. It lets people easily get image data even though Chrome made it harder. With Image Scrap, users can still get and use images for different things without any trouble. By cleverly getting past Chrome's barriers, this project helps developers, researchers, and anyone who needs image data to keep going without any problems. Whether you're building websites, doing research, or just looking for ideas, Image Scrap is a simple way to get the pictures you need."
            },
            "covid_tracking": {
                "name": "Covid Tracking",
                "body": "COVID Tracker is a ReactJS project crafted with the assistance of the COVID19 API. It serves as a straightforward tool for monitoring COVID-19 cases and fatalities worldwide. COVID-19, caused by the SARS-CoV-2 virus, is a highly contagious illness affecting people globally. While many experience mild symptoms and recover without medical intervention, others face severe illness requiring urgent medical care. This project aims to provide users with up-to-date information on the spread of COVID-19, helping them stay informed about the situation in their region and around the world. With COVID Tracker, users can easily access essential data to navigate through these challenging times."
            },
            "blogging_website": {
                "name": "Blogging website",
                "body": "Pandita is a sleek React blogging website built with Material UI, offering a modern and user-friendly platform for sharing ideas and stories. Leveraging Material UI's elegant design components, Blogify provides a seamless and visually appealing experience for both writers and readers. Whether you're a seasoned blogger or new to the scene, Blogify's intuitive interface makes it easy to create, publish, and discover engaging content. Join our community and start sharing your voice with the world today."
            },
            "lending_case": {
                "name": "Lending Case",
                "body": "Lending Case aims to discern patterns predicting loan default likelihood. By analyzing past loan applicants data, including default history, the project identifies indicators for risk assessment. Actions such as denying loans, reducing amounts, or adjusting interest rates can then be taken accordingly. Leveraging this insight, lenders can mitigate risk effectively. With Lending Case, decision-making becomes more informed, enabling better allocation of resources and minimizing potential losses."
            },
            "face_detection": {
                "name": "Face detection",
                "body": "Face detection is a Python project utilizing OpenCV for real-time face detection. By leveraging OpenCV's robust features, the project accurately identifies and locates faces within images or video streams. With simple integration and efficient algorithms, FaceDetect offers a versatile solution for various applications, including security systems, photo editing tools, and augmented reality experiences. Developers can easily implement face detection functionalities to enhance their projects, ensuring a seamless and engaging user experience."
            },
            "telecom_churn": {
                "name": "Telecom Churn",
                "body": "In the fiercely competitive telecom industry, retaining customers is paramount. With annual churn rates averaging 15-25%, it's crucial to prioritize customer retention over acquisition, given the high costs involved. This project focuses on analyzing customer data from a prominent telecom firm to predict and mitigate churn risks. By building predictive models and identifying key churn indicators, telecom companies can strategically target at-risk customers and implement measures to enhance retention rates, ensuring long-term profitability and sustainability in this dynamic market."
            }
        };


        const projectList = Object.entries(projectNames).map((project, idx) => {
            const [project_key, project_name] = project;
            console.log(project_name?.body);
            return (<div className='flex cursor-pointer' key={`projects_${project_key}_${idx}`}>
                <a href={projectLink[project_key]} target="_blank" rel="noopener noreferrer" className="flex">
                    <Image className={`${project_key} rounded-md md:block hidden`}
                        src={`/icons/projects/${project_key}.jpg`}
                        key={`${project_key}_${idx}`}
                        alt="project"
                        width={300}
                        height={300}
                    />
                    <div className='flex flex-col'>
                        <div className='ml-5 font-medium'>{project_name?.name}</div>
                        <div className='ml-5 font-light'>{project_name?.body}</div>
                    </div>
                </a>
            </div>);
        });
        setProjects(projectList);

    }, []);

    const [projects, setProjects] = useState([]);

    return <>
        <h1 className='font-bold text-4xl mt-20 mb-5'>Projects</h1>
        <div className="grid md:grid-cols-2 gap-10">
            {projects}
        </div>
    </>;
}