"use client";
import { LinkOutlined } from '@ant-design/icons';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

function ProjectCard({ project, index }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ perspective: 1000 }}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative h-full w-full rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group hover:via-primary/50 transition-all duration-500"
            >
                <div className="relative h-full glass rounded-2xl p-8 flex flex-col justify-between overflow-hidden group-hover:bg-dark-800/80 transition-colors">
                    {/* Spotlight Effect */}
                    <div className="absolute inset-0 bg-primary/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-all">
                                <LinkOutlined className="text-white text-lg" />
                            </a>
                        </div>
                        <p className="text-light-muted mb-6 leading-relaxed relative z-10">{project.description}</p>
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/5 text-secondary">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const projectNames = {
        "data_scraping": {
            "name": "Google Image Scraping",
            "body": "Image Scrap is a tool made to work around Google Chrome's new rules on getting pictures from Google Images. It lets people easily get image data even though Chrome made it harder.",
            "tech": ["Python", "Selenium", "BS4"]
        },
        "covid_tracking": {
            "name": "World Covid Tracker",
            "body": "COVID Tracker is a ReactJS project crafted with the assistance of the COVID19 API. It serves as a straightforward tool for monitoring COVID-19 cases and fatalities worldwide.",
            "tech": ["React", "API", "ChartJS"]
        },
        "blogging_website": {
            "name": "Blogging website",
            "body": "Pandita is a sleek React blogging website built with Material UI, offering a modern and user-friendly platform for sharing ideas and stories.",
            "tech": ["React", "MUI", "Firebase"]
        },
        "lending_case": {
            "name": "Lending Case",
            "body": "Lending Case aims to discern patterns predicting loan default likelihood. By analyzing past loan applicants data, including default history, the project identifies indicators for risk assessment.",
            "tech": ["Python", "Pandas", "EDA"]
        },
        "face_detection": {
            "name": "Face detection",
            "body": "Face detection is a Python project utilizing OpenCV for real-time face detection. By leveraging OpenCV's robust features, the project accurately identifies and locates faces within images or video streams.",
            "tech": ["Python", "OpenCV", "AI"]
        },
        "telecom_churn": {
            "name": "Telecom Churn",
            "body": "This project focuses on analyzing customer data from a prominent telecom firm to predict and mitigate churn risks. By building predictive models, it implements measures to enhance retention rates.",
            "tech": ["ML", "Scikit-Learn"]
        }
    };

    const [projects, setProjects] = useState([]);

    const projectLink = {
        "data_scraping": "https://github.com/Himachallad",
        "covid_tracking": "https://github.com/Himachallad",
        "blogging_website": "https://github.com/Himachallad",
        "lending_case": "https://github.com/Himachallad",
        "face_detection": "https://github.com/Himachallad",
        "telecom_churn": "https://github.com/Himachallad"
    };

    useEffect(() => {

        const projectList = Object.entries(projectNames).map(([project_key, project_details]) => {
            return {
                ...project_details,
                url: projectLink[project_key],
                key: project_key
            };
        });
        setProjects(projectList);

    }, []);

    return (
        <section className="py-32 relative z-10" id="projects">
            <div className="text-center mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Featured <span className="text-primary">Projects</span>
                </motion.h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} index={idx} />
                ))}
            </div>
        </section>
    );
};